import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { listPost } from '../postSlice'

const ListPost = () => {
    const post = useAppSelector((item: any) => item.post.value)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(listPost())
    }, [dispatch])
    return (
        <div>
            <h2 className="text-2xl uppercase text-center">Kết nối nhà vườn và Hành trình Organic</h2>
            <div className='grid grid-cols-4 gap-8 mt-10'>
                {post?.map((post: any, index: any) => {
                    return (
                        <div key={index}>
                            <div className="border w-[290px] h-[160px] overflow-hidden">
                                <Link to={``}><img className='mx-auto hover:scale-125 transition ease-in-out duration-500 ' src={`${post.img}`} alt="" /></Link>
                            </div>
                            <h3 className="text-center hover:text-lime-400 py-4"><Link to={``} className="text-xl ">{post.name}</Link></h3>
                            <Link className="text-center hover:text-lime-400" to={``}>{post.desc}</Link>
                        </div>
                    )
                })}
            </div>

            <div className='pt-5'>
                <div>
                    <h1 className="text-3xl capitalize text-center my-10 normal">Cam kết của chúng tôi</h1>
                    <div className="grid grid-cols-5 gap-8 mb-10">
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_4.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_3.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_2.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_1.jpg" alt="" />
                        <img className="mx-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/index_commit_4-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPost