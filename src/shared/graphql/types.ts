
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface GetBlogInput {
    id: number;
}

export interface BlogPost {
    id: number;
    title: string;
}

export interface IQuery {
    listBlogPosts(): BlogPost[] | Promise<BlogPost[]>;
    getBlogPostById(input: GetBlogInput): BlogPost | Promise<BlogPost>;
}

type Nullable<T> = T | null;
