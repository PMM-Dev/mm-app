import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomCard from "../CustomCard";
import PostCard from "../../components/PostCard";

const PostMenu = ({ postPreviewList }) => {
  const navigation = useNavigation();

  return (
    <CustomCard
      title="게시글"
      moreButtonTitle="더 보기"
      onMoreClick={() => navigation.navigate("PostList")}
      flex={3.5}
    >
      {postPreviewList.map((element, key) => (
        <TouchableOpacity
          key={key}
          activeOpacity={0.8}
          onPress={() => console.log("asdf")}
        >
          <PostCard description={element.title} like={element.like} />
        </TouchableOpacity>
      ))}
    </CustomCard>
  );
};

export default PostMenu;
