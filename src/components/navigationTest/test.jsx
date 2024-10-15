
//import myAction from database/action.js
import { myAction } from 'src/database/action'


const TestNavigation = () => {

    
  return (
    
    <div>
        <form action={myAction}>
        <input type="text" name="title" id="title" placeholder='title' />
        <input type="text" name="desc" id="desc" placeholder='desc' />
        <input type="text" name="slug" id="slug" placeholder='slug' />
        <button >Test me </button>
        </form>
    </div>
  )
}

export default TestNavigation