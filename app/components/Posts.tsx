import { getSortedPostsData } from "../../lib/posts"
//import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    //<ListItem key={post.id} post={post} />
                    JSON.stringify(post)
                ))}
            </ul>
        </section>
    )
}

// import React, { useEffect, useState } from 'react';
// import { getSortedPostsData } from "../../lib/posts";
// import ListItem from "./ListItem";

// interface Post {
//     id: string;
//     title: any;
//     date: any;
// }

// export default function Posts() {
//     const [posts, setPosts] = useState<Post[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await getSortedPostsData();
//             setPosts(data); // Set the fetched data in the state
//         };

//         fetchData();
//     }, []);

//     return (
//         <section className="mt-6 mx-auto max-w-2xl">
//             <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
//             <ul className="w-full">
//                 {posts.map(post => (
//                     <ListItem key={post.id} post={post} />
//                 ))}
//             </ul>
//         </section>
//     );
// }
