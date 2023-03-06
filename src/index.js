import React, {Component} from 'react';
import {render} from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';

const node = document.getElementById('root');


//header-icon
const HeaderIcon = ({icon}) =>{
  return(
    <p className='ico'>
    <span className='icon'>Y</span>
    </p>
  )
}

const HeaderTitle = ({title}) =>{
  return(
      <h3 className='title'>Hacker News</h3>
  )
}

const Navigation = ({nav}) =>{
  return(
    <div className='navigation'>
      <ul>
      <li><a href='/'>new</a></li>|
        <li><a href='/'>threads</a></li>|
        <li><a href='/'>comments</a></li>|
        <li><a href='/'>show</a></li>|
        <li><a href='/'>ask</a></li>|
        <li><a href='/'>jobs</a></li>|
        <li><a href='/'>submit</a></li>
      </ul>
    </div>
  )
}

const testData = [
  {
    id : 1,
    title : 'Why I\'m I Suing the government ',
    points : 1345,
    user : 'Buid',
    time_posted : '2023-02-14 12:09:23',
    comments : 234,
    website : '(bonniestudios.com)'
  },
  {
    id :2,
    title : 'Zenzizenzizenzic',
    points : 145,
    user : 'Ivank',
    time_posted : '2023-02-14 12:09:23',
    comments : 24,
    website : '(wikiepedia.com)'
  },
  {
    id : 3,
    title : 'A practical security guide for web developers',
    points : 345,
    user : 'Emmanuel',
    time_posted : '2023-02-14 12:09:23',
    comments : 34,
    website : '(googlenews.com)'
  },
  {
    id : 4,
    title : 'I got arrested in US',
    points : 45,
    user : 'Sarrah',
    time_posted : '2023-02-14 12:09:23',
    comments : 4,
    website : '(fbi.com)'
  },
  {
    id : 5,
    title : 'SuperFormula',
    points : 77,
    user : 'Edward Snowden',
    time_posted : '2023-02-14 12:09:23',
    comments : 114,
    website : '(terrace.co)'
  },
  {
    id : 6,
    title : 'I stole a database',
    points : 277,
    user : 'ward buyden',
    time_posted : '2023-02-14 12:09:23',
    comments : 314,
    website : '(terrace.co)'
  }
]

const Time = ({time}) =>{
  let timeString = moment(time).fromNow();
  return(
    <span>{timeString}</span>
  )
}

const Post = ({post}) =>{
  return(
    <div className='post'>
       <div className='post-title'>
        <p className='id'>{post.id}</p>
        <h3>{post.title}</h3>
        <p className='website'>{post.website}</p>
        </div>
        <div className='post-body'>
          <p>{post.points} points by {post.user} <Time/> | flag | hide | {post.comments} comments | instapaper | save to pocket</p>
        </div>
    </div>
  )
}

const Body = ({body}) =>{
  return(
    <div className='body'>
     {testData.map(data =>(
      <Post post={data}/>
     ))}
    </div>
  )
}

//header
const Header = ({header}) =>{
  return(
    <div className='header'>
      <HeaderIcon/>
      <HeaderTitle/>
      <Navigation/>
    </div>
  )
}
//container
const HackerNews = ({}) =>{
  return(
    <div className='container'>
      <Header/>
      <Body/>
    </div>
  )
}
//propTypes
HeaderIcon.propTypes = {
  icon : PropTypes.string
}
HeaderTitle.propTypes = {
  title : PropTypes.string.isRequired
}
Post.propTypes = {
  post : PropTypes.array
}

render(<HackerNews/>,node);