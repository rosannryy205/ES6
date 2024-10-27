const fetchData = async () => {
    const res = await fetch("http://localhost:3000/posts",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "json-sever3",
            author: "typicode",
        })
    });
    const data = await res.json();
    console.log(data);
};

const number=2;

export{fetchData, number};