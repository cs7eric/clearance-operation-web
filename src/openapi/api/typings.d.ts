declare namespace API {
  type Article = {
    articleType?: string;
    author?: string;
    authorId?: number;
    category?: string;
    content?: string;
    cover?: string;
    id?: string;
    issueId?: string;
    likes?: number;
    publishTime?: string;
    replyNum?: number;
    status?: string;
    tags?: string[];
    title?: string;
  };

  type ArticleDTO = {
    articleType?: string;
    author?: string;
    authorId?: number;
    category?: string;
    content?: string;
    cover?: string;
    createBy?: string;
    createTime?: string;
    delFlag?: number;
    id?: string;
    isCollected?: boolean;
    isLiked?: boolean;
    issueId?: string;
    likes?: number;
    publishTime?: string;
    replyNum?: number;
    status?: string;
    tags?: string[];
    title?: string;
    updateBy?: string;
    updateTime?: string;
    userId?: number;
    version?: number;
  };

  type ArticlePageDTO = {
    beginTime?: string;
    category?: Category;
    endTime?: string;
    pageNum?: number;
    pageSize?: number;
    username?: string;
  };

  type Category = {
    categoryName?: string;
    categoryType?: string;
    id?: number;
  };

  type Comment = {
    articleId?: string;
    authorAvatar?: string;
    content?: string;
    createTime?: string;
    id?: string;
    likeNum?: number;
    nickName?: string;
    parentId?: string;
    replyNum?: number;
    state?: string;
    userId?: string;
  };

  type CommentDTO = {
    articleId?: string;
    authorAvatar?: string;
    content?: string;
    createTime?: string;
    id?: string;
    likeNum?: number;
    nickName?: string;
    parentId?: string;
    state?: string;
    userId?: string;
  };

  type encryptUsingGETParams = {
    /** content */
    content: string;
  };

  type getArticleByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type getArticlesByUsernameUsingGETParams = {
    /** username */
    username: string;
  };

  type getCountByUsernameUsingGETParams = {
    /** username */
    username: string;
  };

  type getFirstLevelCommentsUsingGETParams = {
    /** articleId */
    articleId: string;
  };

  type getIssueAnswersUsingGETParams = {
    /** issueId */
    issueId: string;
  };

  type getIssueUsingGETParams = {
    /** id */
    id: string;
  };

  type getListUsingGETParams = {
    /** type */
    type: string;
  };

  type getRepliesToParentCommentUsingGETParams = {
    /** articleId */
    articleId: string;
    /** commentId */
    commentId: string;
  };

  type Issue = {
    authorId?: string;
    createTime?: string;
    detailContent?: string;
    expectContent?: string;
    focusNum?: number;
    id?: string;
    replyNum?: number;
    status?: string;
    tags?: string[];
    title?: string;
    updateTime?: string;
  };

  type IssueDTO = {
    authorId?: string;
    createTime?: string;
    detailContent?: string;
    expectContent?: string;
    focusNum?: number;
    id?: string;
    replyNum?: number;
    status?: string;
    tags?: string[];
    title?: string;
    updateTime?: string;
  };

  type LabelListDTO = {
    labelList?: Record<string, any>[];
    labelType?: string;
  };

  type PageRequestDTO = {
    beginTime?: string;
    category?: Category;
    endTime?: string;
    pageNum?: number;
    pageSize?: number;
  };

  type PageResult = {
    current?: number;
    pages?: number;
    records?: Record<string, any>[];
    size?: number;
    total?: number;
  };

  type Result = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
    success?: boolean;
  };

  type ResultComment = {
    code?: number;
    data?: Comment;
    message?: string;
    success?: boolean;
  };

  type ResultIssue = {
    code?: number;
    data?: Issue;
    message?: string;
    success?: boolean;
  };

  type ResultListArticle = {
    code?: number;
    data?: Article[];
    message?: string;
    success?: boolean;
  };

  type ResultListComment = {
    code?: number;
    data?: Comment[];
    message?: string;
    success?: boolean;
  };

  type ResultListIssue = {
    code?: number;
    data?: Issue[];
    message?: string;
    success?: boolean;
  };

  type ResultListobject = {
    code?: number;
    data?: Record<string, any>[];
    message?: string;
    success?: boolean;
  };

  type Resultlong = {
    code?: number;
    data?: number;
    message?: string;
    success?: boolean;
  };

  type ResultPageResult = {
    code?: number;
    data?: PageResult;
    message?: string;
    success?: boolean;
  };

  type Resultstring = {
    code?: number;
    data?: string;
    message?: string;
    success?: boolean;
  };

  type sendCodeUsingPOSTParams = {
    /** email */
    email: string;
  };

  type User = {
    avatar?: string;
    createBy?: string;
    createTime?: string;
    delFlag?: number;
    email?: string;
    id?: number;
    nickName?: string;
    password?: string;
    phonenumber?: string;
    sex?: string;
    updateBy?: string;
    updateTime?: string;
    userType?: string;
    username?: string;
    version?: number;
  };

  type UserActionDTO = {
    articleId?: string;
    id?: number;
    userActionType?: string;
    userId?: number;
  };

  type UserDTO = {
    avatar?: string;
    code?: string;
    email?: string;
    id?: number;
    nickName?: string;
    password?: string;
    phonenumber?: string;
    sex?: string;
    userType?: string;
    username?: string;
  };
}
