export function Body(){
    const data = {
        '1':["https://th.bing.com/th/id/OIP.5EnmJ8y4Va72MJ7iu2uVpwHaE8?w=276&h=184&c=7&r=0&o=5&pid=1.7",1, ['Laptop','It is Intel i5 core, 500 SD', 'https://th.bing.com/th/id/OIP.bXfmLZlDiZXoyd3-ZLAgygHaJl?w=162&h=212&c=7&r=0&o=5&pid=1.7']],
        '2':["https://th.bing.com/th/id/OIP._hXAb9z-rwWVYEbZ_C0-GAHaEw?w=266&h=180&c=7&r=0&o=5&pid=1.7",2, ['Website','This is Website of Landscapes','https://th.bing.com/th/id/OIP.AaMDZhGBa3xFu4Pij_yfjwHaLb?w=133&h=205&c=7&r=0&o=5&pid=1.7']],
        '3':["https://th.bing.com/th/id/OIP.RDbNl93PcJr2MpiJGPTznwHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7",3 , ['Mobile','This is mobile phone','https://th.bing.com/th?q=Green+Person+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247']],
        '4':["https://th.bing.com/th/id/OIP.JgKq_o63A1O6wxBDg6xt6QHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",4 ,['Apple Watch','This is Apple Watch','https://th.bing.com/th/id/OIP.1T6eLx5wy5bASJgg7KGcRQHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7']]
    }

const arr=Object.values(data)
const element=arr.map((event)=>{
    return(
        <div class="row my-1 justify-content-center align-items-center">
            <div class="col-sm-4 my-3"><img src={event[0]} alt="thumbnail" class="img-fluid img-thumbnail"></img></div>
            <div class="col-sm-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>
                <br></br>
                {event[1]}</div>
                <div class="col-sm-4">
                    <p><h3 style={{ color: '#2196F3' }}>{event[2][0]}</h3></p>
                    <br></br>
                    <p class="my-3 fw-bold">{event[2][1]}</p><br></br>
                    <p class="text-secondary">Submitted by :<img src={event[2][2]} alt="profile1" class="avatar"></img></p>
                </div>
        </div>

    )
})


return (
    <div class="container">
        {element}
    </div>
)
}