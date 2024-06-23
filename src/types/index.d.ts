export type TIndexData = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    description: string;
    authors: string[];
    categories: string[];
    tags: string[];
  };
  render: () => Promise<void>;
};

export type TPostData = {
  title: string;
  meta_title: string;
  description: string;
  image: string;
};

export type TPost = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: PostData;
  render: () => Promise<void>;
};

export type TFaqItem = {
  title: string;
  answer: string;
};

export type TPostType = {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    title: string;
    draft: boolean;
    faqs: FaqItem[];
    description?: string;
    call_to_action?: TCallToAction;
    image: string;
    texts: TTexts[];
    tribunal: string;
    jurisdiction?: TJurisdiction[];
  };
};

export type TTexts = {
  title: string;
  text: string;
}

export type TJurisdiction = {
  title: string;
  comunas: string[];
}


export type TCallToAction = {
  title: string;
  content: string;
  image: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
};
