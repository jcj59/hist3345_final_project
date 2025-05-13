import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import blackPantherLogo from './assets/images/Black-Panther-Party-Logo.jpg';
import freeBobbySeale from './assets/images/free-bobby-seale.PNG';
import eldridgeCleaver from './assets/images/eldridge-cleaver.PNG';
import imperialistAmerica from './assets/images/imperialist-america.PNG';
import RPCC from './assets/images/rpcc.PNG';


function Header() {
  return (
    <header className="w-screen bg-black text-white p-8 flex justify-between items-center shadow-lg">

      {/* Left-side navigation */}
      <nav className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/manifesto" className="hover:underline">10 Point Program</Link>
      </nav>

      {/* Right-side navigation */}
      <nav>
        <Link to="/bibliography" className="hover:underline">Bibliography</Link>
      </nav>

    </header>
  );
}

function Home() {
  return (
    <div className="w-screen min-h-screen bg-white py-8 px-4 flex flex-col items-center">

      <h2 className="text-6xl font-bold text-center py-12 max-w-4xl mb-12">
        BLACK PANTHER PARTY
      </h2>

      <div className="w-full max-w-6xl flex flex-col items-center text-center text-lg leading-relaxed space-y-16">
        <img
          src={blackPantherLogo}
          alt="Black Panther Party Logo"
          className="w-full max-w-3xl"
        />
        <p>
          According to an article on the publishing strategies of the Black Panther Party, the Black Panther newspaper was the most lucrative source of revenue for the Party<a href="/bibliography#ref-9" className="citation-link ml-1">[9]</a>. This article highlights the fact that the Panthers heavily relied on income from the publication of books and other writings to fund their movement. This project aims to reimagine the publishing methods of the Black Panther Party in modern day in the form of a website. Modern publishing is still a very lucrative process with the prominence of ad revenue. I chose to convert the publishing method into a website because it would give the Panthers the best platform in the modern world. Social media platforms would not be as effective as a website as these are easily censored, especially with the heavy influence the wealthy elite has on the content of these platforms whom the Panthers directly oppose. While ad revenue might not be the easiest method of income for the Panthers as likely many companies would be hesitant to advertise on their site, various donation buttons on the website similar to GoFundMe pages as well as putting articles behind a paywall would allow this method of publication to be equally if not more lucrative than newspapers while reaching a much wider audience on the internet.
        </p>
      </div>
    </div>
  );
}

function Events() {
  const [showBobbyMore, setShowBobbyMore] = useState(false);
  const [showEldridgeMore, setShowEldridgeMore] = useState(false);
  const [showImperialistMore, setShowImperialistMore] = useState(false);
  const [showRPCCMore, setShowRPCCMore] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-white py-8 px-4 flex flex-col items-center">
      <h2 className="text-6xl font-bold text-center py-12 max-w-4xl mb-12">
        Upcoming Events
      </h2>


      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 justify-center mb-36">
        <img
          src={freeBobbySeale}
          alt="Free Bobby Seale"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
        />
        <a href="/bibliography#ref-3" className="citation-link ml-1">[3]</a>

        <div className="md:w-1/2 space-y-4 text-left">
          <h3 className="text-2xl font-semibold">Bobby Seale is Going to Be Murdered by the United States Government in Connecticut</h3>
          <p>
            Bobby will be electrocuted not for actually committing a crime, but for having conspired to do so, an extremely vague charge that rests on circumstantial evidence and the testimony of informers.
            <br /><br />
            <strong>THE INCIDENT:</strong> On May 22, 1969 eight New Haven Panthers were arrested and charged with the kidnap and murder of Alex Rackley, a New York Panther. The police claim he was killed because he was an informer. The panthers charge that Rackley was murdered by the police in order to justify nation-wide raids and arrests. Fourteen Panthers have been arrested in connection with the incident. Bobby was arrested on August 9th. He had been speaking through out the country, had travelled internationally, and had prepared for a public conference of several thousand people. Yet, when he was arrested in Oakland, his home community, he was charged among other things with “unlawful flight to avoid prosecution” in connection with the Rackley murder, close to three months after the incident occurred. Bobby has now been extradited to New Haven to stand trial.
            <a href="/bibliography#ref-1" className="citation-link ml-1">[1]</a>
          </p>

          {showBobbyMore && (
            <p className="pt-2">
              <strong>Analysis:</strong>
              <br /><br />
              Bobby Seale was one of the co-founders of the Black Panther Party and a co-author of the 10 Points Program making him a primary political target for the US government<a href="/bibliography#ref-7" className="citation-link ml-1">[7]</a>. In 1969, Bobby Seale was arrested in connection with the murder of Alex Rackley and tried in New Haven, Ct. Through analyzing the 10 Points Program we can understand the reaction from the Black Panther Party to Seale’s arrest and accurately imagine how they would have responded with modern media technology.<br /><br />
              The importance of Bobby Seale can be immediately seen in the poster for this event. The text at the bottom of the poster “We must save Bobby Seale because we must save the Black Panther Party because we must save the revolutionary spirit in America” shows how to the Panters and other revolutionaries in the United States at this time, Bobby Seale represented the revolutionary spirit in America<a href="/bibliography#ref-3" className="citation-link ml-1">[3]</a>. The United States government taking down Bobby Seale would effectively crush hope for revolutionary movements in the United States.<br /><br />
              One of the Black Panther Party’s wants written by Bobby Seale in the 10 Points Program was the “immediate end to all police brutality and murder of Black people, other people of color, all oppressed people inside the United States”<a href="/bibliography#ref-12" className="citation-link ml-1">[12]</a>. They specifically claim that the US Government uses its domestic enforcement agencies to carry out it program of oppression against black people. This point was a major emphasis in the early days of the organization with armed patrols as an intimidation tactic to ward off police brutality. Bobby Seale’s arrest was seen as a form of police brutality by the Black Panther Party as the government abuses the system to unjustly arrest a prominent political figure that they view as a threat to their system. This explains the party’s reaction to the incident.<br /><br />
              According to a statement written in the Black Panther File, the Black Panthers believed that Bobby Seale would be sentenced to death and electrocuted by the US Government in Connecticut; however, at the time of this writing, Bobby Seale had yet to stand trial for this case<a href="/bibliography#ref-1" className="citation-link ml-1">[1]</a>. Since police brutality towards black people in America was a critical issue to the Black Panther Party, and because Bobby Seale was a primary political target for the US government, it makes sense why the Party would be outraged and jump to such conclusions in their writing.

            </p>
          )}
          <button
            onClick={() => setShowBobbyMore(!showBobbyMore)}
            className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-[#facc15] hover:text-black transition"
          >
            {showBobbyMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>


      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 justify-center mb-36">
        <img
          src={eldridgeCleaver}
          alt="Eldridge Cleaver for President"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
        />
        <a href="/bibliography#ref-1" className="citation-link ml-1">[1]</a>

        <div className="md:w-1/2 space-y-4 text-left">
          <h3 className="text-2xl font-semibold">All Power to the People, Black Power to Black People</h3>
          <p>
            Eldridge Cleaver, as Minister Of Information of the Black Panther Party in Oakland, California, sets the example for action against the situation in America. Unlike corrupt Republican and Democratic politicians who pay lip service to correcting unjust conditions, Eldridge believes in a peoples’ movement, putting power into the hands of the people and having it away from the elite rulers who control our very lives. He believes in a society based on human needs and wants rather than private profits and capital gains. There can be no just society as long as some are fantastically rich while a=other people suffer. Black people and other oppressed groups in raceland USA find themselves becoming more and more victimized by Americanisms. Americanisms being the tradition of slavery in this country; Americanism being the genocidal war waged against the Indian; Americanism being the exploitation of cheap Mexican labor; and finally, Americanism being such a racist social system that even millions of poor whites have lost out in this dog-eat-dog game of winner take all.
            <br /><br />
            <strong>New Politics Party</strong> Vote for Liberation—Vote for Brother Cleaver!!<a href="/bibliography#ref-3" className="citation-link ml-1">[3]</a>
          </p>

          {showEldridgeMore && (
            <p className="pt-2">
              <strong>Analysis:</strong>
              <br /><br />
              Eldridge Cleaver was the Minister of Information in the Black Panther Party. In 1968, he ran for president of the United States<a href="/bibliography#ref-8" className="citation-link ml-1">[8]</a>. This embodies the first point of the 10 Points Program: “We want power to determine the destiny of our Black and oppressed communities.”<a href="/bibliography#ref-12" className="citation-link ml-1">[12]</a> Running for president is the epitome of attempting to control the destiny of Black and oppressed communities’ destiny. Eldridge Cleaver likely knew that he did not have a realistic chance of winning the presidency; however, his campaign helped establish a national platform for the Panther’s revolutionary movement.<br /><br />
              The pamphlet encouraging readers to “Vote for brother Cleaver” is titled “All Power to the People. Black Power to Black People.” This shows how Cleaver ran on the platform of Black Power<a href="/bibliography#ref-1" className="citation-link ml-1">[1]</a>. According to an article from the Smithsonian, the “Black is Beautiful” movement was also on the rise at the time of Cleaver’s campaign as black culture and identity became increasingly embraced around the world<a href="/bibliography#ref-11" className="citation-link ml-1">[11]</a>. Some artists after Cleaver’s campaign even included Black Panther imagery in their work, connecting Black Power to Black Pride. It is likely that the national platform for Black Power established by Cleaver’s campaign further progressed the “Black is Beautiful” movement and thus also was a campaign on Black Pride.<br /><br />
              In the written portion of the original pamphlet, Cleaver runs for the freedom of black people and other oppressed groups in America; however, it is interesting to note his view of women. According to an article on women in the Black Panther Party, Eldridge Cleaver wrote in his book Soul on Ice that “he considered the rape of white women to be a revolutionary act, and that he ‘practiced’ on Black women to start.”<a href="/bibliography#ref-10" className="citation-link ml-1">[10]</a> It is clear that Eldridge Cleaver does not consider women in his view of oppressed groups in America which appears to be consistent with the general view of women by the Black Panther Party.

            </p>
          )}
          <button
            onClick={() => setShowEldridgeMore(!showEldridgeMore)}
            className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-[#facc15] hover:text-black transition"
          >
            {showEldridgeMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>


      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 justify-center mb-36">
        <img
          src={imperialistAmerica}
          alt="Imperialist America"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
        />
        <a href="/bibliography#ref-2" className="citation-link ml-1">[2]</a>

        <div className="md:w-1/2 space-y-4 text-left">
          <h3 className="text-2xl font-semibold">Imperialists</h3>
          <p>
            <strong>Great Britain:</strong> After losing World War II, Great Britain economically and in every way was in a complete mess. In the form of war loans the US decided to aid Britain to help rebuild her economy. Britain has been unable to repay most of these loans as during this period the countries in the so-called British Empire started and have since gained their independence, resulting in Britain’s source of cheap raw material and exploitation being cut off. Result, US controls or has shares in most British firms and Britain depends on US for defense, etc.
            <br /><br />
            <strong>West Germany:</strong> After World War II, Germany was completely messed up. The so-called allies, Great Britain and US, after Germany was divided into East and West, took over West Germany. US started pouring capital into Germany and nearly all troops stationed in Germany are American and British. About 70% of the main German firms have American capital invested.
            <br /><br />
            <strong>France:</strong> Because of financial interests and the decline of the franc, France is tied to US economically. Also, with Pompidou as President, the situation has worsened. Pompidou is connected with the Rothschilds the world’s largest gold and diamond dealers which are tied up with US and South African capital.
            <br /><br />
            <strong>Japan:</strong> Puppet Force of US imperialism in Asia; after last war the same situation as West Germany.
            <br /><br />
            <strong>Israel:</strong> The Zionist puppet state of US imperialism.
            <br /><br />
            <strong>South Africa:</strong> After Great Britain, US has the most investment in South Africa gold and diamonds. US supplies arms to South Africa and then arms for her defense against the Black people. US has refused to vote against South Africa in the United Nations concerning her apartheid policy.
            <br /><br />
            <strong>Rhodesia:</strong> Closely linked with South Africa and together with Portugal hope to keep a block of imperialists in Africa to impede the struggle of Africans struggling for their liberation. Most of Rhodesia’s aid comes from South Africa which in turn comes from the US.
            <br /><br />
            <strong>Greece:</strong> The Communist Party became the strongest Party in Greece recently. The CIA intervened and there was a coup. The CIA then installed the Junta which is being kept in power by American aid.
            <br /><br />
            <strong>Belgium:</strong> After Degaulle kicked out the NATO headquarters from France, Belgium housed it. Most so-called international firms, e.g. Shell, have their European headquarters in Belgium. These firms are of course all American under one name or another.
            <br /><br />
            <strong>Portugal:</strong> Portugal is a dictatorship. She controls and has colonized Angola and Mozambique for a number of years. The people of Angola and Mozambique have been wagering a heroic struggle against the fascist Portuguese powers for sometime for their National Liberation. Portugal is able to stabilize her own economy because of the diamonds, gold and other natural resources of her colonies in of South Africa, Rhodesia and Portugal. They have formed a coalition in order to preserve the racist capitalist rule of the Europeans in Africa.
            <br /><br />
            <strong>Norway & Denmark:</strong> Members of NATO—the world pig police force. The first NATO fleet is stationed in Norway, the chief CIA operation for Northern Europe is conducted in Denmark. 50% of Danish and Norwegian firms are controlled by US capital.
            <a href="/bibliography#ref-2" className="citation-link ml-1">[2]</a>
          </p>

          {showImperialistMore && (
            <p className="pt-2">
              <strong>Analysis:</strong>
              <br /><br />
              The Black Panther Party published a political poster in the Black Panther Newspaper mocking American imperialism<a href="/bibliography#ref-2" className="citation-link ml-1">[2]</a>. It includes a large American pig representing American imperialism as the dominant force of oppression in the world. Many smaller pigs represent different countries benefiting from American imperialism. This poster directly aligns with point 8 from the 10 Point Program calling for the immediate end to all wars of aggression which directly stem from American imperialism<a href="/bibliography#ref-12" className="citation-link ml-1">[12]</a>.<br /><br />
              According to Alexander Blanchard in “Understanding Context and Contradiction in the Concept of Violence: Frantz Fanon, Stokely Carmichael and the Long 1960s”, the black community within the United States could be seen “as an internal colony within the US imperialist system.”<a href="/bibliography#ref-6" className="citation-link ml-1">[6]</a> This is likely how the Black Panther Party viewed themselves and explains why they felt so connected to the revolutionary movements in Third World countries. They experienced the same oppression of American imperialism just within the country itself. This justifies the Black Panther’s mockery of American Imperialism and explains why this issue is present in one of the party’s most influential documents.
            </p>
          )}
          <button
            onClick={() => setShowImperialistMore(!showImperialistMore)}
            className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-[#facc15] hover:text-black transition"
          >
            {showImperialistMore ? "Show Less" : "Learn More"}
          </button>

        </div>
      </div>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 justify-center mb-36">
        <img
          src={RPCC}
          alt="Revolutionary People's Constitutional Convention"
          className="w-full md:w-1/2 max-w-md rounded-lg shadow-md"
        />
        <a href="/bibliography#ref-1" className="citation-link ml-1">[1]</a>

        <div className="md:w-1/2 space-y-4 text-left">
          <h3 className="text-2xl font-semibold">Call for a Revolutionary People’s Constitutional Convention</h3>
          <p>
            The hour is late and the situation is desperate. As a nation, America is now in the middle of the greatest crisis in its history. The Black Panther Party believes that the American people are capable of rising to the task which history has laid before the nation.<br /><br />
            WE THEREFORE CALL FOR A REVOLUTIONARY PEOPLE’S CONSTITUTIONAL CONVENTION, TO BE CONVENED BY THE AMERICAN PEOPLE, TO WRITE A NEW CONSTITUTION THAT WLL GUARANTEE AND DELIVER TO EVERY AMERICAN CITIZEN THE INVIOLABLE HUMAN RIGHT TO LIFE, LIBERTY, AND THE PURSUIT OF HAPPINESS!<br /><br />
            We call upon the American people to rise up, repudiate, and restrain the forces of fascism that are now rampant in this land and which are the only real obstacles standing between us and a rational solution of the national crisis.<br /><br />
            We believe that Black people are not the only group within America that stands in need of a new Constitution. Other oppressed ethnic groups, the youth of America, Women, young men who are slaughtered as cannon fodder in mad, avaricious wars of aggression, our neglected elderly people all have an interest in a new Constitution that will guarantee us a society in which Human Rights are supreme and Justice is assured to every man, woman, and child within its jurisdiction. For it is only through this means that America, as a nation, can live together in peace with our brothers and sisters the world over. Only through this means can the present character of America, the purveyor of exploitation, misery, death, and wanton destruction all over the planet earth, be changed.
            <a href="/bibliography#ref-5" className="citation-link ml-1">[5]</a>
          </p>

          {showRPCCMore && (
            <p className="pt-2">
              <strong>Analysis:</strong>
              <br /><br />
              In 1970, the Black Panther Party organized the Revolutionary People’s Constitutional Convention. Point 10 of the 10 Point Program contains the introduction of the Declaration of Independence<a href="/bibliography#ref-12" className="citation-link ml-1">[12]</a>. This shows how like the American revolutionaries, the members of the Black Panther Party no longer acknowledge the American government as a legitimate governing body of their community. Thus, it is only natural that they would call for the creation of a new Constitution.<br /><br />
              This convention was meant to unite all revolutionary groups in the United States. They explicitly say in the original call for the convention that “other oppressed ethnic groups, the youth of America, Women”<a href="/bibliography#ref-5" className="citation-link ml-1">[5]</a> are included in their cause; however, similar to Eldridge Cleaver’s view on women, the Black Panther Party did not actually take the women’s movements as of equal importance to their movement as shown with their lack of sincere communication with the women’s rights and lesbian groups which attended the convention in Philadelphia<a href="/bibliography#ref-4" className="citation-link ml-1">[4]</a>. This again shows the Panther’s hypocrisy when it comes to dealing with female based movements, underscoring their idea that the Panthers were supportive of the entire revolutionary spirit of America. Not supporting all lesbian and females groups makes them no better than the original writers of the Constitution.

            </p>
          )}
          <button
            onClick={() => setShowRPCCMore(!showRPCCMore)}
            className="mt-2 bg-gray-900 text-white px-4 py-2 rounded hover:bg-[#facc15] hover:text-black transition"
          >
            {showRPCCMore ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Manifesto() {
  const tenPointProgram = [
    {
      title: "1. We want freedom. We want power to determine the destiny of our Black and oppressed communities.",
      description: "We believe that Black and oppressed people will not be free until we are able to determine our destinies in our own communities ourselves, by fully controlling all the institutions which exist in our communities."
    },
    {
      title: "2. We want full employment for our people.",
      description: "We believe that the federal government is responsible and obligated to give every person employment or a guaranteed income. We believe that if the  American businessmen will not give full employment, then the technology and means of production should be taken from the businessmen and placed in the community so that the people of the community can organize and employ all of its people and give a high standard of living."
    },
    {
      title: "3. We want an end to the robbery by the capitalists of our Black and oppressed communities.",
      description: "We believe that this racist government has robbed us and now we are demanding the overdue debt of forty acres and two mules. Forty acres and two mules were promised 100 years ago as restitution for slave labor and mass murder of Black people. We will accept the payment in currency which will be distributed to our many communities. The American racist has taken part in the slaughter of over fifty million Black people. Therefore, we feel this is a modest demand that we make."
    },
    {
      title: "4. We want decent housing, fit for the shelter of human beings.",
      description: "We believe that if the landlords will not give decent housing to our Black and oppressed communities, then housing and the land should be made into cooperatives so that the people in our communities, with government aid, can build and make decent housing for the people."
    },
    {
      title: "5. We want decent education for our people that exposes the true nature of this decadent American society. We want education that teaches us our true history and our role in the present-day society.",
      description: "We believe in an educational system that will give to our people a knowledge of the self. If you do not have knowledge of yourself and your position in the society and in the world, then you will have little chance to know anything else."
    },
    {
      title: "6. We want completely free health care for all Black and oppressed people.",
      description: "We believe that the government must provide, free of charge, for the people, health facilities which will not only treat our illnesses, most of which have come about because of our oppression, but which will also develop preventive medical programs to guarantee our future survival. We believe that mass health education and research programs must be developed to give all Black and oppressed people access to advanced scientific and medical information, so we may provide ourselves with proper medical attention and care."
    },
    {
      title: "7. We want an immediate end to police brutality and murder of Black people, other people of color, all oppressed people inside the United States.",
      description: "We believe that the racist and fascist government of the United States uses its domestic enforcement agencies to carry out its program of oppression against black people, other people of color and poor people inside the United States. We believe it is our right, therefore, to defend ourselves against such armed forces and that all Black and oppressed people should be armed for self-defense of our homes and communities against these fascist police forces."
    },
    {
      title: "8. We want an immediate end to all wars of aggression. ",
      description: "We believe that the various conflicts which exist around the world stem directly from the aggressive desire of the United States ruling circle and government to force its domination upon the oppressed people of the world. We believe that if the United States government or its lackeys do not cease these aggressive wars it is the right of the people to defend themselves by any means necessary against their aggressors."
    },
    {
      title: "9. We want freedom for all Black and oppressed people now held in U.S. federal, state, county, city and military prisons and jails. We want trials by a jury of peers for all persons charged with so-called crimes under the laws of this country.",
      description: "We believe that the many Black and poor oppressed people now held in United States prisons and jails have not received fair and impartial trials under a racist and fascist judicial system and should be free from incarceration. We believe in the ultimate elimination of all wretched, inhuman penal institutions, because the masses of men and women imprisoned inside the United States or by the United States military are the victims of oppressive conditions which are the real cause of their imprisonment. We believe that when persons are brought to trial they must be guaranteed, by the United States, juries of their peers, attorneys of their choice and freedom from imprisonment while awaiting trial."
    },
    {
      title: "10. We want land, bread, housing, education, clothing, justice, peace, and people’s community control of modern technology.",
      description: "When, during human events, it becomes necessary for one people to dissolve the political bonds which have connected them with another, and to assume, among the powers of the earth, the separate and equal station to which the laws of nature and nature’s God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. We hold these truths to be self-evident, that all men are created equal; that they are endowed by their Creator with certain unalienable rights; that among these are life, liberty, and the pursuit of happiness. That to secure these rights, governments are instituted among men, deriving their just powers from the consent of the governed; that, whenever any form of government becomes destructive of these ends, it is the right of the people to alter or to abolish it, and to institute a new government, laying its foundation on such principles, and organizing its powers in such form as to them shall seem most likely to affect their safety and happiness. Prudence, indeed, will dictate that governments long established should not be changed for light and transient causes; and, accordingly, all experience hath shown that mankind is most disposed to suffer, while evils are sufferable, then to right themselves by abolishing the forms to which they are accustomed. But, when a long train of abuses and usurpation, pursuing invariably the same object, evinces a design to reduce them under absolute despotism, it is their right, it is their duty, to throw off such government, and to provide new guards for their future security."
    }
  ];

  return (
    <div className="relative w-screen min-h-screen px-6 py-12 flex flex-col items-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 z-0"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/608874eeb7410e0f0c4b0915/1624050723498-TDWGON25AGV4UJX44T54/stephenshameskidfist.jpeg?format=2500w')`,
        }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-4xl w-full text-black">
        <h2 className="text-5xl font-bold text-center mb-12">The Black Panther Party’s Ten Point Program<a href="/bibliography#ref-12" className="citation-link ml-1">[12]</a></h2>

        <div className="space-y-8 text-left">
          {tenPointProgram.map((point, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-lg leading-relaxed">{point.description}</p>

            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

const bibliography = [
  {
    id: "1",
    author: "Black Panther Party",
    title: "Black Panther File 1970",
    location: "San Francisco, CA",
    publisher: "Black Panthers",
    year: "1970",
    site: "Alexander Street",
    url: "https://search.alexanderstreet.com/view/work/bibliographic_entity|bibliographic_details|4635331",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "2",
    author: "Black Panther Party",
    title: "Black Panther Party Newspaper, Vol. 4 no. 16, March 21, 1970",
    publisher: "Black Panthers",
    year: "1970",
    site: "Alexander Street",
    url: "https://search.alexanderstreet.com/view/work/bibliographic_entity|bibliographic_details|4648664",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "3",
    author: "Black Panther Party",
    title: "What Do the Panthers Stand For",
    location: "Oakland, CA",
    publisher: "Black Panthers",
    year: "1970",
    site: "Alexander Street",
    url: "https://search.alexanderstreet.com/view/work/bibliographic_entity|bibliographic_details|4635368",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "4",
    title: "Revolutionary People's Constitutional Convention.",
    publisher: "Off Our Backs",
    year: "1970",
    site: "ProQuest",
    url: "https://www.proquest.com/magazines/revolutionary-peoples-constitutional-convention/docview/197137914/se-2",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "5",
    title: "National Strike Information Center Newsletter no. 15",
    location: "Waltham, MA",
    publisher: "Privately Published",
    year: "1970",
    site: "Alexander Street",
    url: "https://search.alexanderstreet.com/view/work/bibliographic_entity|bibliographic_details|4670069",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "6",
    author: "Blanchard, A.",
    title: "Understanding Context and Contradiction in the Concept of Violence: Frantz Fanon, Stokely Carmichael and the Long 1960s",
    journal: "Political Studies",
    volume: "71",
    issue: "4",
    year: "2021",
    pages: "1047–1067",
    url: "https://doi.org/10.1177/00323217211055563",
    originalYear: "2023",
    accessed: "Accessed May 12, 2025",
    type: "journal"
  },
  {
    id: "7",
    author: "Cromartie, J. V.",
    title: "Social Problems and Identification: Aspects of the Black Panther Party as a Social Movement",
    location: "Scarborough",
    publisher: "National Association of African American Studies",
    year: "2008",
    site: "ProQuest",
    url: "https://www.proquest.com/conference-papers-proceedings/social-problems-identification-aspects-black/docview/1312376961/se-2",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "8",
    author: "Harris, Jessica Christina.",
    title: "Revolutionary Black Nationalism: The Black Panther Party",
    journal: "The Journal of Negro History",
    volume: "85",
    issue: "3",
    year: "2000",
    pages: "162–174",
    site: "ProQuest",
    url: "https://www.proquest.com/scholarly-journals/revolutionary-black-nationalism-panther-party/docview/194508220/se-2",
    accessed: "Accessed May 12, 2025",
    type: "journal"
  },
  {
    id: "9",
    author: "Fearnley, Andrew M.",
    title: "The Black Panther Party’s Publishing Strategies and the Financial Underpinnings of Activism, 1968–1975",
    journal: "The Historical Journal",
    volume: "62",
    issue: "1",
    year: "2019",
    pages: "195–217",
    url: "https://doi.org/10.1017/S0018246X18000201",
    accessed: "Accessed May 12, 2025",
    type: "journal"
  },
  {
    id: "10",
    author: "Farmer, Ashley, Mary Phillips, Robyn C. Spencer, and Leela Yellesetty.",
    title: "Women in the Black Panther Party: A Roundtable",
    site: "International Socialist Review",
    url: "https://isreview.org/issue/111/women-black-panther-party/index.html",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "11",
    title: "Black is Beautiful: The Emergence of Black Culture and Identity in the 60s and 70s",
    site: "National Museum of African American History and Culture",
    url: "https://nmaahc.si.edu/explore/stories/black-beautiful-emergence-black-culture-and-identity-60s-and-70s",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "12",
    author: "Black Panther Party",
    title: "The Black Panther Party’s Ten Point Program 1972",
    site: "Black Panther Party Alumni Legacy Network",
    url: "https://bppaln.org/10-point-platform",
    accessed: "Accessed May 12, 2025",
    type: "website"
  },
  {
    id: "13",
    author: "Bierut, Michael, et al.",
    title: "Looking Closer: Posters as Advertisement, Art, Political Artifact, Commodity",
    container: "Posters: Advertisement, Art, Political Artifact, Commodity",
    pages: "196–218",
    type: "book-section"
  }
];


function Bibliography() {
  return (
    <div className="relative w-screen min-h-screen px-6 py-12 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Bibliography</h2>
      <ol className="list-decimal space-y-6 pl-6 max-w-4xl">
        {bibliography.map((source) => (
          <li key={source.id} id={`ref-${source.id}`}>
            {/* Journal Article */}
            {source.type === "journal" && (
              <p className="text-lg leading-relaxed">
                {source.author}. <span className="italic">"{source.title}."</span>{" "}
                <span className="italic">{source.journal}</span>{" "}
                {source.volume && ` ${source.volume}`}
                {source.issue && `, no. ${source.issue}`}
                {source.year && ` (${source.year})`}
                {source.pages && `: ${source.pages}`}.{" "}
                {source.url && (
                  <>
                    Accessed {source.accessed}.{" "}
                    <a href={source.url} className="text-blue-600 underline">
                      {source.url}
                    </a>
                  </>
                )}
              </p>
            )}

            {/* Website */}
            {source.type === "website" && (
              <p className="text-lg leading-relaxed">
                {source.author && `${source.author}. `}<span className="italic">"{source.title}."</span>{" "}
                {source.site}. {source.accessed}.{" "}
                <a href={source.url} className="text-blue-600 underline">
                  {source.url}
                </a>
              </p>
            )}

            {/* Book Section */}
            {source.type === "book-section" && (
              <p className="text-lg leading-relaxed">
                {source.author}. <span className="italic">"{source.title}."</span> In{" "}
                <span className="italic">{source.container}</span>
                {source.pages && `, ${source.pages}`}.
              </p>
            )}

            {/* Book or other printed source */}
            {!["website", "journal", "book-section"].includes(source.type) && (
              <p className="text-lg leading-relaxed">
                {source.author}. <span className="italic">{source.title}</span>.{" "}
                {source.location && `${source.location}: `}{source.publisher}, {source.year}.
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/manifesto" element={<Manifesto />} />
      </Routes>
    </Router>
  );
}

export default App;
