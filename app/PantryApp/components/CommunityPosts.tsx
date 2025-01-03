import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, ScrollView, Pressable, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../styles';
import { Recipe, CommunityPost } from '../types';
import { useUser } from '../contexts/UserContext';

interface CommunityPostsProps {
  posts: CommunityPost[];
  onRecipePress: (recipe: Recipe) => void;
}

export const CommunityPosts = ({ posts, onRecipePress }: CommunityPostsProps) => {
  const { user } = useUser();
  const [selectedPost, setSelectedPost] = useState<CommunityPost | null>(null);
  const [newComment, setNewComment] = useState('');

  const openComments = (post: CommunityPost) => {
    setSelectedPost(post);
  };

  const closeComments = () => {
    setSelectedPost(null);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    // TODO: Implementare la logica per aggiungere il commento
    setNewComment('');
  };

  return (
    <View >
      <Text style={styles.cardTitle}>Community Posts</Text>
      {posts.map((post) => (
        <View key={post.id} style={styles.communityPost}>
          <View style={styles.postHeader}>
            {post.author.avatar ? (
              <Image 
                source={{ uri: post.author.avatar }} 
                style={styles.authorAvatar} 
              />
            ) : (
              <View style={styles.defaultAvatar}>
                <Text>{post.author.name[0]}</Text>
              </View>
            )}
            <View style={styles.postHeaderText}>
              <Text style={styles.authorName}>{post.author.name}</Text>
              <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>
          </View>
          
          <Text style={styles.postContent}>{post.content}</Text>
          
          {post.recipe && (
            <TouchableOpacity 
              style={styles.linkedRecipe}
              onPress={() => post.recipe && onRecipePress(post.recipe)}
            >
              <Text style={styles.linkedRecipeText}>{post.recipe.title}</Text>
              <Ionicons name="chevron-forward" size={16} color="#666" />
            </TouchableOpacity>
          )}
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="heart-outline" size={20} color="#666" />
              <Text style={styles.actionText}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => openComments(post)}
            >
              <Ionicons name="chatbubble-outline" size={20} color="#666" />
              <Text style={styles.actionText}>{post.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="share-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedPost !== null}
        onRequestClose={closeComments}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={closeComments}
        >
          <Pressable style={styles.commentsModal}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentsTitle}>Comments</Text>
              <TouchableOpacity onPress={closeComments}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentContent}>

              {selectedPost?.commentsList.length === 0 ? (
                <View style={styles.commentContainer}>
                  <Text>{"Be the first to comment..."}</Text>
                </View>

  ):
              (selectedPost?.commentsList.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <View style={styles.commentHeader}>
                    {comment.author.avatar ? (
                      <Image 
                        source={{ uri: comment.author.avatar }} 
                        style={styles.commentAvatar} 
                      />
                    ) : (
                      <View style={styles.defaultCommentAvatar}>
                        <Text>{comment.author.name[0]}</Text>
                      </View>
                    )}
                    <View style={styles.commentHeaderText}>
                      <Text style={styles.commentAuthor}>{comment.author.name}</Text>
                      <Text style={styles.commentContent}>{comment.content}</Text>
                      <Text style={styles.commentTimestamp}>{comment.timestamp}</Text>
                    </View>
                  </View>
                </View>
              )))}
            </ScrollView>

            <View style={styles.commentInputContainer}>
              {user?.avatar ? (
                <Image 
                  source={{ uri: user.avatar }} 
                  style={styles.userAvatar} 
                />
              ) : (
                <View style={styles.defaultCommentAvatar}>
                  <Text>{user?.name[0]}</Text>
                </View>
              )}
              <TextInput
                style={styles.commentInput}
                value={newComment}
                onChangeText={setNewComment}
                placeholder="Scrivi un commento..."
                multiline
              />
              <TouchableOpacity 
                style={styles.sendButton}
                onPress={handleAddComment}
              >
                <Ionicons name="send" size={24} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}; 