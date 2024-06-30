import { IPage } from "./i-page";

export interface IProject {
id:number,
title:string,
description:string,
thumbnail_url:string,
project_catagory:string,
page:[IPage]
}
