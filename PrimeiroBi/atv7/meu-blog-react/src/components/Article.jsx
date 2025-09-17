import React from 'react';

function Article(props) {
return (
    <article>
    <h2>{props.titulo}</h2>
    <p>Este post foi publicado em <time dateTime="2025-08-06">{props.data}</time>.</p>
    <p>{props.texto}</p>

    <figure>
        <img src={props.imgSrc} alt={props.imgAlt} />
        <figcaption>{props.imgCaption}</figcaption>
    </figure>
    </article>
);
}

export default Article;