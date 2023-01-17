interface KeyValue<K, V>{
    key: K;
    value: V;
}

function getValue(): KeyValue<string, number>{
    return {
        key: 'name',
        value: 10
    };
}

//Constrains
interface User{
    id: string,
    name: string,
}

function print<A extends User>(a: A): A{
    console.log(a);
    return a
}

print({id: "3838", name: "Juan"});

//Utility types
type Point={
    x:number,
    y:number,
    desc?: string,
}

type ReadOnlyPoint = Readonly<Point>;

type PickPoint = Pick<Point, "x" | "y">;

type OmitPoint = Omit<Point, "x" | "y">;

type RequiredPoint = Required<Point>;

type OptionalPoint = Partial<Point>;


const keyVal: Record<string, number> = {
    "name": 10,
}

type keyValType = {[key:string]: number};