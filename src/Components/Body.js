import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {Carousel} from '3d-react-carousal';
import M from 'materialize-css';

const useStyles = makeStyles((theme) => ({
    paper:{
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
        font: 'inital',
        fontFamily: 'monospace'
    }
}));

export default function Body() {
    const classes = useStyles();

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators: false,
        padding: 100,
      });
    });

    function moveNextCarousel() {
      var elems = document.querySelector('.carousel');
      var moveRight = M.Carousel.getInstance(elems);
      moveRight.next(1);
  }

  function movePrevCarousel() {
    var elems = document.querySelector('.carousel');
    var moveLeft = M.Carousel.getInstance(elems);
    moveLeft.prev(1);
}

  return (
    <div className={classes.paper}>
      <CssBaseline />
    <div className="container carousel-heading">
      <h4 className="section-heading text-left grey-text">Concept Videos</h4>
      <p className="text-left grey-text">&nbsp;Select a number</p>
      
      <div className="carousel-fixed-item center middle-indicator">
        <div className="left content-indicator1">
            <button onClick={movePrevCarousel} className="btn-floating movePrevCarousel middle-indicator-text waves-effect waves-light content-indicator"><i className="material-icons left  middle-indicator-text">chevron_left</i></button>
        </div>
        
        <div className="right content-indicator1">
        <button onClick={moveNextCarousel} className="btn-floating moveNextCarousel middle-indicator-text waves-effect waves-light content-indicator"><i className="material-icons right middle-indicator-text">chevron_right</i></button>
        </div>
        <div className="container carousel">
            <a className="carousel-item" href="#one!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Leena Barua</span> thinks about our plans</p>
              </div>
            </a>
            <a className="carousel-item" href="#two!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Shubham Tomar</span> thinks about our plans</p>
              </div>
            </a>
            <a className="carousel-item" href="#three!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Leena Barua</span> thinks about our plans</p>
              </div>
            </a>
            <a className="carousel-item" href="#four!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Shubham Tomar</span> thinks about our plans</p>
              </div>
            </a>
            <a className="carousel-item" href="#five!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Shubham Tomar</span> thinks about our plans</p>
              </div>
            </a>
              <a className="carousel-item" href="#six!">
              <div className="divBoX">
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTQ0IiBoZWlnaHQ9IjE0NCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjNjY2NjY2Ij48cGF0aCBkPSJNMTU0LjY3MSw0NC4zMzNjLTEuNjQ4MzMsLTYuMTYzMzMgLTYuNTA3MzMsLTExLjAyMjMzIC0xMi42NzA2NywtMTIuNjcwNjdjLTExLjE4LC0yLjk5NTY3IC01Ni4wMDAzMywtMi45OTU2NyAtNTYuMDAwMzMsLTIuOTk1NjdjMCwwIC00NC44MjAzMywwIC01Ni4wMDAzMywyLjk5NTY3Yy02LjE2MzMzLDEuNjQ4MzMgLTExLjAyMjMzLDYuNTA3MzMgLTEyLjY3MDY3LDEyLjY3MDY3Yy0yLjk5NTY3LDExLjE4IC0yLjk5NTY3LDQxLjY2NyAtMi45OTU2Nyw0MS42NjdjMCwwIDAsMzAuNDg3IDIuOTk1NjcsNDEuNjY3YzEuNjQ4MzMsNi4xNjMzMyA2LjUwNzMzLDExLjAyMjMzIDEyLjY3MDY3LDEyLjY3MDY3YzExLjE4LDIuOTk1NjcgNTYuMDAwMzMsMi45OTU2NyA1Ni4wMDAzMywyLjk5NTY3YzAsMCA0NC44MjAzMywwIDU2LjAwMDMzLC0yLjk5NTY3YzYuMTcwNSwtMS42NDgzMyAxMS4wMjIzMywtNi41MDczMyAxMi42NzA2NywtMTIuNjcwNjdjMi45OTU2NywtMTEuMTggMi45OTU2NywtNDEuNjY3IDIuOTk1NjcsLTQxLjY2N2MwLDAgMCwtMzAuNDg3IC0yLjk5NTY3LC00MS42Njd6TTcxLjY2NjY3LDExMC44MjUzM3YtNDkuNjUwNjdsNDMsMjQuODI1MzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
                <p className="div-author-desc">See what <span className="div-author-name">Shubham Tomar</span> thinks about our plans</p>
              </div>
              </a>
          </div>
    </div>
        <h4 className="section-heading text-left grey-text">Live Classes</h4>
        <p className="text-left grey-text">&nbsp;Select A Number</p>
        <div className="row">
            <div className="live-class-row">
                <div className="col s1"></div>
                <div className="col s2">
                    <span className="active-link-class">5</span>
                </div>
                <div className="col s2">6</div>
                <div className="col s2">7</div>
                <div className="col s2">8</div>
                <div className="col s2">9</div>
            </div>    
        </div>
    </div>
    </div>
  );
}