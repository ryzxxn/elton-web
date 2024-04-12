interface ProjectItem {
    repo: string;
    link: string;
    ProjectName: string;
    thumbnail: string;
    description: string;
    stack: string[];
}

export const projectData: ProjectItem[] = [
    {
        repo: "https://github.com/ryzxxn/LeafSync",
        stack: ['Typescript','Javascript', 'Node.js', 'Electron', 'Express', 'SQL Server', 'MySql', 'React.js', 'HTML', 'CSS'], // Updated stack property
        link: "https://github.com/ryzxxn/LeafSync/releases/tag/v0.0.1",
        ProjectName: "LeafSync",
        description: "DataBase manager: run & execute queries on your SQL database",
        thumbnail: "https://i.ibb.co/J3TM5cN/leafsync.png"
    },
    // {
    //   repo: "https://github.com/ryzxxn/evergreen.next",
    //   stack: ["Javascript", "Node.js", "Express", "React.js", "WebHooks"],
    //   link: "https://plantio.vercel.app/",
    //   ProjectName: "Evergreen",
    //   description: "Plant listing/selling",
    //   thumbnail: "https://i.ibb.co/TRVVrVX/evergreen.png"
    // },
    {
      repo: "https://github.com/ryzxxn/pixel-io",
      stack: ['Javascript', 'Node.js', 'WebSocket', 'express', 'React.js'],
      link: "https://pixel-io.eltoncosta.xyz/",
      ProjectName: "Pixel-IO",
      description: "Draw in realtime and share across multiple users",
      thumbnail: "https://i.ibb.co/g7fDz9V/Desktop-2024-03-13-19-40-20-03.gif"
    },
    {
      repo: "https://github.com/ryzxxn/PIS-bucket",
      stack: ['Javascript', 'Node.js', 'express', 'React.js', 'WebHooks'],
      link: "https://pis.eltoncosta.xyz/",
      ProjectName: "PIS-Bucket(Personal Image Storage😋)",
      description: "Who dosen't like Free Storage? -all images on this website are cached from here",
      thumbnail: "https://i.ibb.co/TRVsKhc/upload.png"
    },
    {
      repo: "https://github.com/ryzxxn/WAIFU",
      stack: ["Javascript", "Node.js", "Express", "React.js", "WebHooks"],
      link: "https://waifu.eltoncosta.xyz/",
      ProjectName: "Waifu Gen",
      description: "Dont judge me 😅 (i was learning to fetch and use Webhooks)",
      thumbnail: "https://i.ibb.co/18QZpBH/waifu.png"
    },
    {
      repo: "https://github.com/ryzxxn/elton-web",
      stack: ["Javascript", "Node.js", "React.js"],
      link: "https://eltoncosta.xyz/",
      ProjectName: "eltoncosta",
      description: "hi! 👋",
      thumbnail: "https://i.ibb.co/Lp7g1KG/proto.png"
    },
    {
      repo: "https://github.com/ryzxxn/AI/tree/main/Hand-written-number-recorgnition",
      stack: ['Python', 'Tensor Flow', 'React', 'Node.js'],
      link: "https://ai-nr.netlify.app/",
      ProjectName: "Hand-Written Number Classifier 🖥",
      description: "Trained a Model to recorgnize number written by Humans",
      thumbnail: "https://i.ibb.co/zSbRMjg/hwnc.png"
    }
  ]
