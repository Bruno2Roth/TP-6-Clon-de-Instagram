import React, { useEffect, useState } from "react";
import {
  textRandomizer,
  userRandomizer,
} from "../../services/commentRandomizer";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loadComment = async () => {
      const randomComment = await textRandomizer();
      const randomUser = await userRandomizer();

      setComment(randomComment);
      setUser(randomUser);
    };

    loadComment();
  }, []);

  return (
    <div className="fake-comment">
      <strong>{user}:</strong> {comment}
    </div>
  );
};

export default Comment;