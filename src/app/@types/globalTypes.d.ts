export type CalcOpType = { [key: string]: (a: number, b: number) => number }

export type ApiResponse = [{
    Message: string,
    Status: string,
    PostOffice?: PostOfficeEntity[]
}]
export interface PostOfficeEntity {
    Name: string;
    Description?: string | null;
    BranchType: string;
    DeliveryStatus: string;
    Circle: string;
    District: string;
    Division: string;
    Region: string;
    Block: string;
    State: string;
    Country: string;
    Pincode: string;
}
  