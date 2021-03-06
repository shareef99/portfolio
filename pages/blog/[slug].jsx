import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Link from "next/link";
import Style from "../../styles/pages/slug.module.scss";
import UtilStyles from "../../styles/utils.module.scss";
import Layout from "../../components/layout";

const Post = ({ htmlString, data }) => {
    return (
        <Layout>
            <Head>
                <title>{data.title} | Shareef</title>
                <meta name="description" content={data.description} />
                <meta name="author" content={data.author} />
                <meta name="keywords" content={data.keywords} />
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    httpEquiv="content-type"
                    content="text/html; charset=UTF-8"
                />
            </Head>
            <section>
                <section className={UtilStyles.containerWith50pxMargin}>
                    <div>
                        <h1 className={UtilStyles.h2}>{data.title}</h1>
                    </div>
                    <section id="blogContent">
                        <div
                            className={Style.blogContent}
                            dangerouslySetInnerHTML={{ __html: htmlString }}
                        ></div>
                        <div className={Style.backToBlogs}>
                            <Link href="/blog">
                                <a> ← Back to blogs</a>
                            </Link>
                        </div>
                    </section>
                </section>
            </section>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    // console.log("files: ", files);
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));
    // console.log("paths: ", paths);
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetadata = fs
        .readFileSync(path.join("posts", slug + ".md"))
        .toString();

    const parsedMarkdown = matter(markdownWithMetadata);

    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            htmlString,
            data: parsedMarkdown.data,
        },
    };
};

export default Post;
