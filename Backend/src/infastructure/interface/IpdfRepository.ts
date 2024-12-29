export interface IpdfRepository{
    saveFile(file:any): Promise<Boolean|void>;
    retrievefile(): Promise<any|void>;
    fetchFile(fileId:string): Promise<any|void>
}