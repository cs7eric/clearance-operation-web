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
    actionType?: string;
    beginTime?: string;
    category?: Category;
    data?: Article[];
    endTime?: string;
    pageNum?: number;
    pageSize?: number;
    total?: number;
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

  type FraudCase = {
    additionalInfo?: string;
    amount?: number;
    createTime?: string;
    date?: string;
    delFlag?: number;
    description?: string;
    id?: number;
    region?: string;
    title?: string;
    type?: string;
    updateTime?: string;
    victimAgeRange?: string;
  };

  type getArticleByIdUsingGETParams = {
    /** id */
    id: string;
  };

  type getArticlesByUsernameUsingGETParams = {
    /** username */
    username: string;
  };

  type getCaseListUsingGETParams = {
    /** count */
    count: number;
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

  type getLikeArticlesByIdUsingGETParams = {
    /** userId */
    userId: string;
  };

  type getLikeArticlesUsingGETParams = {
    /** username */
    username: string;
  };

  type getListUsingGETParams = {
    /** type */
    type: string;
  };

  type getRandomUserUsingGETParams = {
    /** count */
    count?: number;
  };

  type getRepliesToParentCommentUsingGETParams = {
    /** articleId */
    articleId: string;
    /** commentId */
    commentId: string;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id: number;
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

  type pageFuzzyUsingGETParams = {
    /** pageNum */
    pageNum: number;
    /** pageSize */
    pageSize: number;
    /** key */
    key: string;
  };

  type pageLikesUsingGETParams = {
    /** pageNum */
    pageNum: number;
    /** pageSize */
    pageSize: number;
    /** userId */
    userId: string;
    /** actionType */
    actionType: string;
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

  type PageResultArticle = {
    current?: number;
    pages?: number;
    records?: Article[];
    size?: number;
    total?: number;
  };

  type PageResultFraudCase = {
    current?: number;
    pages?: number;
    records?: FraudCase[];
    size?: number;
    total?: number;
  };

  type Result = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
    success?: boolean;
  };

  type ResultArticlePageDTO = {
    code?: number;
    data?: ArticlePageDTO;
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

  type ResultList = {
    code?: number;
    data?: Record<string, any>[];
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

  type ResultPageResultArticle = {
    code?: number;
    data?: PageResultArticle;
    message?: string;
    success?: boolean;
  };

  type ResultPageResultFraudCase = {
    code?: number;
    data?: PageResultFraudCase;
    message?: string;
    success?: boolean;
  };

  type Resultstring = {
    code?: number;
    data?: string;
    message?: string;
    success?: boolean;
  };

  type ResultUser = {
    code?: number;
    data?: User;
    message?: string;
    success?: boolean;
  };

  type searchFuzzyUsingGETParams = {
    /** pageNum */
    pageNum: number;
    /** pageSize */
    pageSize: number;
    /** keyword */
    keyword: string;
  };

  type searchUsingGETParams = {
    /** likeKey */
    likeKey: string;
    /** pageSize */
    pageSize: number;
    /** pageNum */
    pageNum: number;
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
    username?: string;
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
