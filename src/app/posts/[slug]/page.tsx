import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPosts } from '../../../lib/content';

export const dynamicParams = false;
export function generateStaticParams() {
  const posts = getPosts();
  return posts.length ? posts.map(post => ({ slug: post.slug })) : [{ slug: '__placeholder__' }];
}
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find(item => item.slug === slug);
  if (!post) notFound();
  return <main className="inner"><Link href="/posts/" className="back">← All posts</Link><h1>{post.title}</h1><p className="small">{post.date}</p><article className="prose" dangerouslySetInnerHTML={{ __html: post.html }} /></main>;
}
