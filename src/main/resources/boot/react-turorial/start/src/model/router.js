import Kindo from '../components/Kindo';
import List from '../components//List';
import Alias from '../components//Alias';
import Event from '../components//Event';
import EventBind from '../components//EventBind';
import TodoList from '../components//TodoList';
import Parent from '../components//Parent';
import LifeCycleRoot from '../components/LifeCycleRoot';
import News from '../components//News';
import NewsContent from '../components/NewsContent';
// import AntDesign from '../components/AntDesign';

export default [
    { path: '/', component: Kindo, exact: true },
    { path: '/list', component: List },
    { path: '/alias', component: Alias },
    { path: '/event', component: Event },
    { path: '/event-bind', component: EventBind },
    { path: '/todo-list', component: TodoList },
    { path: '/parent', component: Parent },
    { path: '/life-cycle', component: LifeCycleRoot },
    { path: '/news', component: News },
    { path: '/news/:id', component: NewsContent },
    // { path: '/ant-design', component: AntDesign }
];