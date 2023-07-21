import React from "react";

function ListApi(props) {
  console.log(props.searchContents, props.data);

  return (
    <section
      className={`${props.className} ${props.data.length === 0 && "empty"}`}
    >
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading &&
        !props.data.length &&
        !props.searchContents.length &&
        props.onEmpty()}
      {props.searchContents &&
        props.data.length > 0 &&
        props.searchContents.length === 0 &&
        props.onEmptySearch()}
      {props.children}
      {props.searchContents.length > 0 &&
      props.data.length > 0 &&
      props.searchValue.length > 0
        ? props.searchContents.map(props.render)
        : props.searchContents.length > 0 &&
          props.data.length > 0 &&
          props.searchValue.length === 0 &&
          props.data.map(props.render)}
    </section>
  );
}

export { ListApi };
