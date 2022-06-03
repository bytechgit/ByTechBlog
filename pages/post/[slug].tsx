import React from 'react'
import Head from 'next/head'
import { getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router'

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components'

const PostDetails = ({ post }) => {
    const router = useRouter();

    if(router.isFallback){
        return <Loader />
    }

    return (
        <>
            <Head>
                <title>byTech</title>
                {/* <title>byTech</title>
        <link rel="icon" href="../../../" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossOrigin="anonymous"></script> */}

                <script src="https://kit.fontawesome.com/dd4ecbb228.js" crossOrigin="anonymous"></script>

            </Head>
            <div className="display">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
                    <div className="lg:col-span-8 col-span-1 post-radius">
                        <PostDetail post={post} />
                        <Author author={post.author} />
                         <CommentsForm slug={post.slug} />
                        <Comments slug={post.slug} />
                    </div>
                    <div className="lg:col-span-4 col-span-1 rightside">
                        <div className="lg:sticky relative top-28">
                            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)
    return {
        props: { post: data }
    };
}

export async function getStaticPaths() {
    const posts = await getPosts()
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}