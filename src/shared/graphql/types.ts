
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface GetBlogInput {
    id: string;
}

export interface BlogPost {
    id: string;
    title: string;
}

export interface IQuery {
    listBlogPosts(): BlogPost[] | Promise<BlogPost[]>;
    getBlogPostById(input: GetBlogInput): BlogPost | Promise<BlogPost>;
}

type Nullable<T> = T | null;
