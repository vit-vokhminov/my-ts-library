// npm install --save @types/react-router-dom

// хуита - всё переписать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';

import './style.css';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contacts' component={Contacts} />
                <Route exact path='/posts' component={Posts} />
                <Route path='/posts/:id' component={Post} />
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);

// app.tsx
import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App: React.FC = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default App;

// post.tsx
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

type RouteParams = {
    id: string;
};

interface IPost {
    title?: string;
    body?: string;
}

type PostState = {
    post: IPost;
};

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
    state = {
        post: {
            title: '',
            body: '',
        },
    };

    componentDidMount() {
        const id = this.props.match.params.id || '';

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((post) => {
                this.setState({ post });
            });
    }

    render() {
        const { post } = this.state;
        const { title, body } = post;

        return (
            <section>
                <h1>Post</h1>
                <article>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </article>
            </section>
        );
    }
}

export default Post;

// posts.tsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface IPost {
    title?: string;
    id?: number;
}

type PostState = {
    data: IPost[];
};

interface IPosts extends RouteComponentProps {
    test?: number;
}

class Posts extends Component<IPosts, PostState> {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ data });
            });
    }

    render() {
        const { data } = this.state;
        console.log(this.props.match.params);

        return (
            <div>
                <h1>Posts:</h1>
                <ul className='posts'>
                    {data.map(({ id, title }: IPost) => (
                        <li key={id}>
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Posts;
