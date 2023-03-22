import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { jsx } from '@emotion/react'
import css from '../img/css.png'
import reactt from '../img/react.png'
import js from '../img/js.png'
import php from '../img/php.png'
import unity from '../img/unity.png'
import html from '../img/html.png'
import wordpress from '../img/wordpress.png'
import nodejs from '../img/nodejs.png'
import '../css/output.css'

const stylebox = {
  maxWidth: '190px',
  overflow: 'hidden',
  borderRadius: 10,
}
const imageboxstyle = {
  objectFit: 'contain',
  padding: '20px',
  backgroundColor: '#0000000f',
}

// const animlistbarStyle = {
//   bottom: (props) => (props.name ? '0px' : '-61px'),
// }

// const useStyles = makeStyles((Theme) => ({
//   animlistbar: {
//     bottom: (props) => (props.name ? '0px' : '-61px'),
//   },
// }))

export default function Sec2() {
  // const [isVisible, setIsVisible] = useState(false)

  // const classes = useStyles({ name })

  return (
    <div className="flex flex-col justify-items-center mx-auto items-center justify-center sm:w-4/5 sm:mx-auto sm:items-stretch sm:flex-row  sm:grid  sm:grid-cols-4  sm:gap-4">
      {itemData.map((item) => (
        <ImageListItem
          style={stylebox}
          className="m-4 imgListItem"
          key={item.img}
        >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={imageboxstyle}
            // onMouseEnter={() => setIsVisible(true)}
            // onMouseLeave={() => setIsVisible(false)}
          />
          <ImageListItemBar
            dir="rtl"
            title={item.title}
            subtitle={<span>{item.author}</span>}
            position="bottom"
            style={{ fontFamily: 'inherit' }}
            className="imgListItemBar transition-all"
            // style={{
            //   bottom: isVisible ? '0px' : '-61px',
            //   transition: 'all .3s',
            // }}
            // className={classes.animlistbar}
          />
        </ImageListItem>
      ))}
    </div>
  )
}

const itemData = [
  {
    img: css,
    title: 'CSS',
    author: 'به همراه فریمورک Tailwind',
  },
  {
    img: html,
    title: 'HTML',
    author: 'زبان وب',
  },
  {
    img: reactt,
    title: 'Reactjs',
    author: 'کتابخانه',
  },
  {
    img: js,
    title: 'Javascript',
    author: 'واکنش‌سازی',
  },
  {
    img: php,
    title: 'PHP',
    author: 'زبان بک‌اند',
  },
  {
    img: unity,
    title: 'Unity',
    author: 'موتور بازیسازی',
  },
  {
    img: wordpress,
    title: 'Wordpress',
    author: 'CMS',
  },
  {
    img: nodejs,
    title: 'Nodejs',
    author: 'زبان سمت سرور',
  },
]
