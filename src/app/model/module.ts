import {topic} from './topic';

export interface module
{
    modulecode:number;
    modulename:string;
    duration: number;
    topic:topic[];
}