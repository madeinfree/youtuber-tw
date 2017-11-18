import * as R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';

const Ground = ({ youtuberState }) => (
  <div>
    <h1 className="text-center">Ground</h1>
  </div>
);

const SomethingToRender = ({ youtuberState }) => {
  const { snippet, statistics } = R.path(['youtuber'], youtuberState);
  const {
    country,
    publishedAt,
    title,
    description,
    thumbnails,
    customUrl
  } = snippet;
  const { subscriberCount, videoCount, viewCount } = statistics;
  const { url: imgUrl } = R.path(['medium'], thumbnails);
  const youtubeUrl = `https://youtube.com/${customUrl}`;
  return (
    <div>
      <div className="jumbotron">
        <p>
          <img src={imgUrl} />
        </p>
        <h1 className="display-3">{title}</h1>
        <p>{description}</p>
        <p>
          <span className="badge badge-pill badge-primary">
            來自：{country}
          </span>{' '}
          <span className="badge badge-pill badge-primary">
            開始時間：{publishedAt}
          </span>{' '}
          <span className="badge badge-pill badge-primary">
            訂閱數：{subscriberCount}
          </span>{' '}
          <span className="badge badge-pill badge-primary">
            總影片數：{videoCount}
          </span>{' '}
          <span className="badge badge-pill badge-primary">
            總收看人數：{viewCount}
          </span>{' '}
        </p>
        <p>
          <a
            className="btn btn-info btn-lg"
            href={youtubeUrl}
            role="button"
            target="_blank"
          >
            前往頻道
          </a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  youtuberState: state.appReducer
});

export default compose(
  connect(mapStateToProps),
  branch(
    ({ youtuberState }) => Object.keys(youtuberState.youtuber).length < 1,
    renderComponent(() => <h1>Nothing to render</h1>),
    renderComponent(SomethingToRender)
  )
)(Ground);
