import { Buttons, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Buttons>
      {options.map(rating => (
        <Button
          type="button"
          key={rating}
          name={rating}
          onClick={onLeaveFeedback}
        >
          {rating.charAt(0).toUpperCase() + rating.slice(1)}
        </Button>
      ))}
    </Buttons>
  );
};
