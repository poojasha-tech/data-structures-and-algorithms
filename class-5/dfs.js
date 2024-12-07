var graph=createGraph(10,[
    [0,1],[0,5],[0,7],
    [1,2],[1,3],
    [3,4],
    [5,3],[5,6],
    [7,8],[7,9],
    [8,9]
])

let marked=[]
for(let i=0;i<graph.length;i++){
    marked.push(false)           //[false,false,false,false,false,false,false,false,false,false,]
}

dfs(0)
console.log(marked)


function createGraph(nodes,edges){
    let graph=[];
    for (let i=0;i<nodes ;i++){
        graph.push([])
    }

    for(let[u,v] of edges){
        graph[u].push(v)

    }
    return graph
}


function dfs(u){
    marked[u]=true
    const nodesFromU=graph[u]
    for(let v of nodesFromU){
        if (!marked[v]){
            dfs(v)
        }
    }
}


//console.log(createGraph(10,[[0,1],[0,5],[0,7],[1,2],[1,3],[3,4],[5,3],[5,6],[7,8],[7,9],[8,9]]))