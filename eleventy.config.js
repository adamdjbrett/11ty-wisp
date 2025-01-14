import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import yaml from "js-yaml";
import CleanCSS from "clean-css";
import { execSync } from 'child_process';
import pluginshortCodes from "./_config/shortcode.js";
import pluginFilters from "./_config/filters.js";
import fs from "fs";
import zlib from "zlib";
export default async function(eleventyConfig) {
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
	});
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
	});
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(pluginshortCodes);
    eleventyConfig.addFilter("cssmin", function (code) {return new CleanCSS({}).minify(code).styles;});
	eleventyConfig.on('eleventy.after', () => {execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })})
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Blog Title",
			subtitle: "This is a longer description about your blog.",
			base: "https://example.com/",
			author: {
				name: "Your Name"
			}
		}
	});
	eleventyConfig.addPlugin(pluginFilters);
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
	eleventyConfig.addPlugin(IdAttributePlugin, {
	});
	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
	function brotli_compress_text_files(_) {
		const textFileEndings = ["html","css","svg","js","json","xml"]
		const files = fs.readdirSync(outputDir, {recursive: true})
		const textFiles = files.filter(f => textFileEndings.some(ending => f.endsWith(ending)))
		textFiles.forEach(f => write_brotli_compressed_file(f))
	}

	function write_brotli_compressed_file(uncompressedFilePath) {
		const outputPath = (outputDir.endsWith('/') ? outputDir : outputDir + '/' ) + uncompressedFilePath
		const uncompressed = fs.readFileSync(outputPath)
		const compressed = zlib.brotliCompressSync(uncompressed, {
			[zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
			[zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY
		})
		fs.writeFileSync(outputPath+'.br', compressed)
	}
};
export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
