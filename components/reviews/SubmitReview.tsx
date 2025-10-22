'use client';

import FormContainer from "@/components/form/FormContainer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { createReviewAction } from "@/utils/actions";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import RatingInput from "./RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import { createReviewAction } from "@/utils/actions";


function SubmitReview({productId}: {productId:string}) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const {user} = useUser();

  return (
    <div>
      <Button
        size={"lg"}
        className="capitalize"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input type="hidden" name="authorName" value={user?.firstName || 'user'} />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <RatingInput name="rating" />
            <TextAreaInput name="comment" labelText="feedback" defaultValue="outstanding product!!!" />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview
