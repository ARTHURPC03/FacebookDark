import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    newPost: '',
    posts: [
      {
        id: 7,
        author: {
          name: 'Arthur Pimentel Cordeiro',
          avatar: 'https://avatars2.githubusercontent.com/u/55156476?s=460&v=4'
        },
        date: '06 Mar 2020',
        content: 'Esse foi o Desafio 4 do GoStack, tomei a liberdade de colocar um tema dark nessa interface, o que acharam?',
        comments: [
          {
            id: 8,
            author: {
              name: 'Felipe Umpierre',
              avatar: 'https://avatars0.githubusercontent.com/u/60620432?s=460&v=4'
            },
            date: '06 Mar 2020',
            content:
              'Muito bom!'
          }, {
            id: 8,
            author: {
              name: 'Filipe Deschamps',
              avatar: 'https://avatars3.githubusercontent.com/u/4248081?s=460&v=4'
            },
            date: '06 Mar 2020',
            content:
              'Delicinha!'
          }
        ]
      },
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '06 Mar 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '06 Mar 2020',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '06 Mar 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '06 Mar 2020',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '06 Mar 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '06 Mar 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '06 Mar 2020',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '06 Mar 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  handleInputChange = e => {
    this.setState({ newPost: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ 
      posts: [{
        id: 8,
        author: {
          name: 'Arthur Pimentel Cordeiro',
          avatar: 'https://avatars2.githubusercontent.com/u/55156476?s=460&v=4'
        },
        date: '06 Mar 2020',
        content: this.state.newPost,
        comments: []
      },...this.state.posts],
      newPost: '' 
    })
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        <div id="createPost" className="post_list post">
          <h3>Criar Publicação</h3>
          <form id="formNewComment" onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            onChange={this.handleInputChange} 
            value={this.state.newPost} 
            placeholder="No que você está pensando, Arthur?"
            />
            <button className="bt bt-az bPostar" type="submit">Postar</button>
          </form>
        </div>
        <div className="post_list">
          {posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </>
    );
  }
}

export default PostList;