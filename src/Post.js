import React, { forwardRef } from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import RepeatIcon from '@mui/icons-material/Repeat';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    // photoUrl
const isMobile = navigator.userAgentData.mobile;
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post__body">
            <p>{message}</p>
            {/* <img src={photoUrl} alt="" /> */}
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltIcon} title="Like" color='gray' />
            <InputOption Icon={CommentIcon} title="Comment" color='gray' />
            <InputOption Icon={RepeatIcon} title="Repost" color='gray' />
            {!isMobile ? (
                <InputOption Icon={SendIcon} title="Send" color='gray' />
            ) : (null)
            }
        </div>
    </div>
  )
})

export default Post