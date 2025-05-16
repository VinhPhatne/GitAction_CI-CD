type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>Vĩnh Phát</p>
  <p>Welcome to Long An</p>
  </>;
}
