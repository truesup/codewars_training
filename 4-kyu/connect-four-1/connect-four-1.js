function whoIsWinner(moves){
  const rows = 6, cols = 7
  const map = {A:0,B:1,C:2,D:3,E:4,F:5,G:6}
  const board = Array.from({length:rows},()=>Array(cols).fill(null))
  const dirs = [[1,0],[0,1],[1,1],[1,-1]]
​
  const drop = (col,color)=>{
    for(let r=rows-1;r>=0;r--){
      if(!board[r][col]){ board[r][col]=color; return [r,col] }
    }
  }
​
  const check = (r,c,color)=>{
    for(const [dr,dc] of dirs){
      let cnt=1
      for(let k=1;k<4;k++){
        const nr=r+dr*k, nc=c+dc*k
        if(nr<0||nr>=rows||nc<0||nc>=cols||board[nr][nc]!==color) break
        cnt++
      }
      for(let k=1;k<4;k++){
        const nr=r-dr*k, nc=c-dc*k
        if(nr<0||nr>=rows||nc<0||nc>=cols||board[nr][nc]!==color) break
        cnt++
      }
      if(cnt>=4) return true
    }
  }
​
  for(const m of moves){
    const [col,color]=m.split('_')
    const [r,c]=drop(map[col],color)
    if(check(r,c,color)) return color
  }
  return "Draw"
}
​