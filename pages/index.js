import Head from 'next/head';
import PetApp from '../components/pet-app/PetApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <Head>
        <title>跨次元电子宠物伙伴</title>
        <meta name="description" content="一款虚拟宠物养成应用，让你在现实世界中养育和互动虚拟宠物" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">
          跨次元电子宠物伙伴
        </h1>
        <PetApp />
      </main>

      <footer className="text-center py-4 text-gray-600">
        <p>© 2023 跨次元电子宠物伙伴 - 虚拟宠物养成应用</p>
      </footer>
    </div>
  );
} 