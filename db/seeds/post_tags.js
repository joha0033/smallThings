exports.seed = (knex, Promise) => Promise.all([
    knex('post').insert(postSeeds),
    knex('tag').insert(tagSeeds),
    knex('post_tag').insert(post_tagSeeds)
  ])
// knex('post').insert(postSeeds)
  //   .then(() => knex('tags').insert(tagSeeds))
  //     .then(() => knex('post_tag').insert(post_tagSeeds))

const postSeeds = [
  {
    title: "github 101",
    content: "Not tricks, Michael, illusions. Guy's a pro. I hear the jury's still out on science. He'll want to use your yacht, and I don't want this thing smelling like fish. No! I was ashamed to be SEEN with you. I like being with you."
  },
  {
    title: "commandline 101",
    content: "He'll want to use your yacht, and I don't want this thing smelling like fish. Say goodbye to these, because it's the last time! It's called 'taking advantage.' It's what gets you ahead in life. There's only one man I've ever called a coward, and that's Brian Doyle Murray. No, what I'm calling you is a television actor."
  },
  {
    title: "javascript 101",
    content: "I've opened a door here that I regret. Marry me. Get me a vodka rocks. And a piece of toast. I'm half machine. I'm a monster. There's so many poorly chosen words in that sentence."
  },
  {
    title: "learning 101",
    content: "Not tricks, Michael, illusions. No, I did not kill Kitty. However, I am going to oblige and answer the nice officer's questions because I am an honest man with no secrets to hide. No, I did not kill Kitty. However, I am going to oblige and answer the nice officer's questions because I am an honest man with no secrets to hide."
  },
]

const tagSeeds = [
  {
    name: 'github'
  },
  {
    name: 'CLI'
  },
  {
    name: 'javascript'
  },
  {
    name: 'learning'
  }
]

const post_tagSeeds = [
  {
    post_id: 1,
    tag_id: 1
  },
  {
    post_id: 2,
    tag_id: 2
  },
  {
    post_id: 3,
    tag_id: 3
  },
  {
    post_id: 4,
    tag_id: 4
  },
]
