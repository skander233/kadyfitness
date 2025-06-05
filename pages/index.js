import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4">
      {/* Header */}
      <header className="text-center py-10">
        <img src="/logo.png" alt="KadiFitness Logo" className="mx-auto h-40" />
        <h1 className="text-4xl font-bold mt-4">Bienvenue chez KadiFitness</h1>
        <p className="mt-2 text-lg">Votre espace bien-être 100% féminin à Niamey</p>
      </header>

      {/* Services */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Activités sportives encadrées",
            "Coaching personnalisé",
            "Bien-être et relaxation",
            "Sensibilisation à la santé et à l’hygiène de vie",
            "Espace communautaire et solidarité féminine",
            "Services complémentaires et flexibilité"
          ].map((service, i) => (
            <div key={i} className="border rounded-xl p-4 shadow-md hover:shadow-lg">
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="text-sm mt-2">Découvrez nos programmes adaptés à toutes les femmes.</p>
            </div>
          ))}
        </div>
      </section>

      {/* À propos */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-4">À propos de KadiFitness</h2>
        <p className="max-w-3xl mx-auto text-center">
          KadiFitness est une salle de sport dédiée aux femmes à Niamey. Nous croyons au pouvoir du sport pour améliorer le bien-être physique et mental. Notre mission est d'accompagner chaque femme dans son parcours vers une vie plus saine et plus épanouie.
        </p>
      </section>

      {/* Galerie */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 h-40 rounded-lg"></div>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Tarifs</h2>
        <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-xl shadow">
            <h3 className="font-bold">Abonnement Mensuel</h3>
            <p className="mt-2">10 000 FCFA</p>
          </div>
          <div className="border p-4 rounded-xl shadow">
            <h3 className="font-bold">Coaching personnalisé</h3>
            <p className="mt-2">Sur devis</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-4">Contact</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Nom" className="border p-2 rounded" />
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <textarea placeholder="Message" className="border p-2 rounded" rows={4}></textarea>
          <button className="bg-black text-white py-2 px-4 rounded">Envoyer</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 KadiFitness. Tous droits réservés.
      </footer>
    </main>
  );
}
