import React from 'react';
import { StarFill } from 'react-bootstrap-icons';

interface StarRatingProps {
  rating: number;
  color?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, color = 'gold' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: fullStars }, (_, index) => (
        <StarFill key={index} color={color} />
      ))}
      {hasHalfStar && <StarFill color={color} style={{ opacity: 0.5 }} />}
    </div>
  );
};

export default StarRating;
