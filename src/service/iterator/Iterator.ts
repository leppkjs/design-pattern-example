export interface Iterator {
    hasNext(): boolean;
    //TODO Object외에 뭘로 대체 할수 있을까?
    next(): object;
}