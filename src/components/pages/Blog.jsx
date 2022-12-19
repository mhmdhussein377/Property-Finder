import React from 'react'
import { list } from '../data/Data';
import Header2 from '../Header2'
import List from '../List';
import Img from "./../../../public/images/banner.png"

const Blog = () => {
    return (
        <div>
            <Header2 img={Img} title="Blog" text="Blog Grid - Our Blogs"/>
            <div className="bg-white">
                <div className="max-w-[90%] mx-auto px-4 py-20 text-center">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {list.map((item, index) => (<List key={index} {...item}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog