import React from 'react';
import { PostCard } from '../PostCard/PostCard';

import image1 from '../../../assets/images/post/EPJ2.jpg';
import pdf1 from '../../../assets/pfds/EPJ.pdf';

import image2 from '../../../assets/images/post/PCCR2.jpg';
import pdf2 from '../../../assets/pfds/PCCR.pdf';

import image3 from '../../../assets/images/post/VOL1.jpg';
import pdf3 from '../../../assets/pfds/VOL.pdf';

import image4 from '../../../assets/images/post/PFC2.jpg';
import pdf4 from '../../../assets/pfds/PFC.pdf';

import image5 from '../../../assets/images/post/CLL1.jpg';
import pdf5 from '../../../assets/pfds/CLL.pdf';

import image6 from '../../../assets/images/post/PMF1.jpg';
import pdf6 from '../../../assets/pfds/PMF.pdf';

import image7 from '../../../assets/images/post/PTEFA1.jpg';
import pdf7 from '../../../assets/pfds/PTEFA.pdf';

import image8 from '../../../assets/images/post/PMF1.jpg';
import pdf8 from '../../../assets/pfds/PMF.pdf';

import image9 from '../../../assets/images/post/TPL1.jpg';
import pdf9 from '../../../assets/pfds/TPL.pdf';

import image10 from '../../../assets/images/post/UCC1.jpg';
import pdf10 from '../../../assets/pfds/UCC.pdf';

import image11 from '../../../assets/images/post/RANKING1.jpg';
import pdf11 from '../../../assets/pfds/RANKING2022.pdf';

import image12 from '../../../assets/images/post/PFCUL1.jpg';
import pdf12 from '../../../assets/pfds/PFCUL.pdf';

import postStyle from './postContainer.module.css';

export const PostContainer = () => {
    return (
    <>
        <div className={postStyle.post}>
            <div className={postStyle.post__cont}>
                <div className={postStyle.post__back}>
                    <PostCard image={image1} pdf={pdf1} />
                    <PostCard image={image2} pdf={pdf2} />
                    <PostCard image={image3} pdf={pdf3} />
                    <PostCard image={image4} pdf={pdf4} />
                    <PostCard image={image5} pdf={pdf5} />
                    <PostCard image={image6} pdf={pdf6} />
                    <PostCard image={image7} pdf={pdf7} />
                    <PostCard image={image8} pdf={pdf8} />
                    <PostCard image={image9} pdf={pdf9} />
                    <PostCard image={image10} pdf={pdf10} />
                    <PostCard image={image11} pdf={pdf11} />
                    <PostCard image={image12} pdf={pdf12} />
                </div>
            </div>
        </div>
    </>
    )
}
