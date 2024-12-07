var graph=createGraph(11,[
    [0,1],[1,2],[2,0],
    [6,4],[4,3],[4,5],
    [7,10],[10,8],[8,9]
])

let cc=[]
for(let i=0;i<graph.length;i++){
    cc.push(-1)
}

let componentId=0;
for(let i=0;i<11;i++){
    if(cc[i]== -1){
        componentId += 1
        dfs (i)
    }
}

function createGraph(nodes,edges){
    let graph=[]
    for(let i=0;i<nodes;i++){
        graph.push([])
    }
    return graph
}

function dfs(u){
    cc[u]=componentId;
    const nodesFromU=graph[u]
    for(let v of nodesFromU){
        if(cc[v]== -1){
            dfs(v)
        }
    }
}