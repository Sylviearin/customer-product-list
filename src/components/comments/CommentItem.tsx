import React from "react";
import {IComment} from "../../models/IComment";

export interface Props  {
    item?: IComment
}

export const CommentItem: React.FC<Props> = ({item}) => {


    return (
        <div>comment item</div>
    )
}
