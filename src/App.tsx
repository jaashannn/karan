import { GraduationCap, BookOpen, Brain, Users, Layout as LayoutIcon, Heart, Briefcase } from 'lucide-react';
import Layout from './components/Layout';
import Section from './components/Section';

function App() {
  return (
    <Layout>
      {/* Home Section */}
      <Section id="home" title="">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <GraduationCap className="w-16 h-16 text-indigo-600 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Child Development and Learning
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Early Childhood Education Major Assessment
          </p>
          <div className="text-gray-600">
            <p className="mb-2">Harneet Kaur</p>
            <p className="mb-2">Student ID: IKO35898</p>
            <p>Bachelor of Education (Early Childhood)</p>
          </div>
          {/* Optional Audio Narration (Uncomment to include) */}
          {/* <audio controls className="mt-6">
            <source src="/path-to-narration.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio> */}
        </div>
      </Section>

      {/* Overview Section */}
      <Section id="overview" title="Assessment Overview">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-4">Assessment Brief</h3>
              <p className="text-gray-700 mb-4">
                This comprehensive assessment demonstrates understanding of child development
                and learning across various domains, incorporating theoretical frameworks
                and practical applications in early childhood education (Arthur et al., 2018).
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Key Components</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                <span>Genetic and developmental factors</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span>Environmental and cultural influences</span>
              </li>
              <li className="flex items-center gap-2">
                <LayoutIcon className="w-5 h-5 text-indigo-600" />
                <span>Developmental domains and stages</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-indigo-600" />
                <span>Learning dispositions and EYLF outcomes</span>
              </li>
              <li className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-600" />
                <span>Professional practice implications</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Learning Objectives</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Demonstrate understanding of child development principles</li>
              <li>Analyze factors influencing early childhood development</li>
              <li>Apply theoretical knowledge to practical scenarios</li>
              <li>Evaluate developmental domains across age groups</li>
              <li>Connect learning theories to EYLF outcomes</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Genetics & Growth Section */}
      <Section id="genetics" title="Genetics & Growth">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            Genetics refers to inherited traits passed from parents to children through DNA,
            influencing physical characteristics like height, weight, and eye color, as well
            as predispositions to health conditions and behaviors (Berk & Meyers, 2020).
          </p>

          <p className="text-gray-700 mb-6">
            Growth encompasses measurable physical changes over time, including brain
            development, motor skills, and organ function, which are critical in early
            childhood (Berk & Meyers, 2020).
          </p>

          <p className="text-gray-700 mb-6">
            Understanding genetics and growth enables educators to identify typical
            development versus delays, facilitating timely interventions (Feldman, 2019).
          </p>

          <div className="text-sm text-gray-600 italic">
            References:
            <ul className="list-disc list-inside">
              <li>Berk, L. E., & Meyers, A. B. (2020). <em>Infants and Children: Prenatal through Middle Childhood</em> (8th ed.). Pearson.</li>
              <li>Feldman, R. S. (2019). <em>Child Development: A Topical Approach</em>. Pearson. (Weekly reading example)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Influences Section */}
      <Section id="influences" title="Influences on Development">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            Development is shaped by both <strong>biological</strong> and <strong>environmental</strong> factors (McDevitt & Ormrod, 2016).
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Biological Factors</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Genetics (Berk & Meyers, 2020)</li>
                <li>Prenatal conditions</li>
                <li>Birth complications</li>
                <li>Brain development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental Factors</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Parenting style (McDevitt & Ormrod, 2016)</li>
                <li>Nutrition</li>
                <li>Family structure</li>
                <li>Access to early learning environments</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Other Influences</h3>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li>
              <strong>Cultural:</strong> Values and traditions, such as collectivist practices in Indigenous communities, shape behavior and learning (Feldman, 2019).
            </li>
            <li>
              <strong>Historical:</strong> Events like COVID-19 disrupted education access, impacting emotional development (McDevitt & Ormrod, 2016).
            </li>
            <li>
              <strong>Contextual:</strong> Social environments, including peer interactions, influence development (Bronfenbrenner, 1979).
            </li>
            <li>
              <strong>Individual:</strong> Unique traits like personality and learning style affect developmental trajectories (Feldman, 2019).
            </li>
          </ul>

          <div className="text-sm text-gray-600 italic">
            References:
            <ul className="list-disc list-inside">
              <li>Berk, L. E., & Meyers, A. B. (2020). <em>Infants and Children: Prenatal through Middle Childhood</em> (8th ed.). Pearson.</li>
              <li>Bronfenbrenner, U. (1979). <em>The Ecology of Human Development</em>. Harvard University Press.</li>
              <li>Feldman, R. S. (2019). <em>Child Development: A Topical Approach</em>. Pearson.</li>
              <li>McDevitt, T. M., & Ormrod, J. E. (2016). <em>Child Development and Education</em> (6th ed.). Pearson.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Development Section */}
      <Section id="development" title="Domains of Development">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold mb-6">Key Developmental Domains</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Physical Development</h4>
                <p className="text-gray-700">Growth in strength, motor skills, and coordination, foundational for activities like walking (Sheridan et al., 2017).</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cognitive Development</h4>
                <p className="text-gray-700">Thinking, learning, and memory, as described by Piaget’s stages of cognitive development (Piaget, 1952).</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Language Development</h4>
                <p className="text-gray-700">Understanding and producing language, supported by Vygotsky’s sociocultural theory (Vygotsky, 1978).</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Social Development</h4>
                <p className="text-gray-700">Interactions and relationships, influenced by Bandura’s social learning theory (Bandura, 1977).</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Emotional Development</h4>
                <p className="text-gray-700">Understanding and expressing feelings, linked to Erikson’s psychosocial stages (Erikson, 1950).</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">Learning Opportunities by Age Group</h3>
          <div className="space-y-6">
            {[
              {
                age: "0–12 months",
                activities: [
                  "Tummy time (physical, supports motor skills, Sheridan et al., 2017)",
                  "Peekaboo (cognitive, aligns with Piaget’s sensorimotor stage, Piaget, 1952)",
                  "Singing lullabies (language, fosters early communication, Vygotsky, 1978)"
                ]
              },
              {
                age: "13–24 months",
                activities: [
                  "Soft climbing (physical, enhances coordination)",
                  "Sorting shapes (cognitive, develops problem-solving)",
                  "Object naming (language, builds vocabulary)"
                ]
              },
              {
                age: "2–3 years",
                activities: [
                  "Tricycles (physical, improves gross motor skills)",
                  "Puzzle games (cognitive, supports logical thinking)",
                  "Storytime (language, encourages narrative skills)"
                ]
              },
              {
                age: "3–4 years",
                activities: [
                  "Dancing (physical, promotes rhythm and movement)",
                  "Pretend play (cognitive, fosters imagination)",
                  "Picture books (language, enhances comprehension)"
                ]
              },
              {
                age: "4–5 years",
                activities: [
                  "Balance games (physical, refines motor control)",
                  "Rhyming games (cognitive/language, supports phonological awareness)",
                  "Role play (social/emotional, builds empathy, Bandura, 1977)"
                ]
              },
              {
                age: "5–6 years",
                activities: [
                  "Group games (physical, encourages teamwork)",
                  "Story creation (cognitive, promotes creativity)",
                  "Sentence formation (language, develops grammar)"
                ]
              },
              {
                age: "6–8 years",
                activities: [
                  "Team sports (physical, builds strength and cooperation)",
                  "Critical thinking activities (cognitive, enhances reasoning)",
                  "Reading comprehension (language, improves literacy)"
                ]
              }
            ].map((group) => (
              <div key={group.age} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{group.age}</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {group.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-600 italic mt-6">
            References:
            <ul className="list-disc list-inside">
              <li>Bandura, A. (1977). <em>Social Learning Theory</em>. Prentice Hall.</li>
              <li>Erikson, E. H. (1950). <em>Childhood and Society</em>. Norton.</li>
              <li>Piaget, J. (1952). <em>The Origins of Intelligence in Children</em>. International Universities Press.</li>
              <li>Sheridan, M., Sharma, A., & Cockerill, H. (2017). <em>From Birth to Five Years: Children's Developmental Progress</em> (5th ed.). Routledge.</li>
              <li>Vygotsky, L. S. (1978). <em>Mind in Society</em>. Harvard University Press.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Dispositions Section */}
      <Section id="dispositions" title="Dispositions and EYLF Outcomes">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            <strong>Dispositions</strong> are enduring habits of mind, such as curiosity,
            persistence, and confidence, which shape how children approach learning
            (Australian Government Department of Education, 2022).
          </p>

          <p className="text-gray-700 mb-6">
            <strong>Learning processes</strong> include exploration, imitation, and
            social interaction, through which children construct knowledge, often
            supported by play-based activities (Feldman, 2019).
          </p>

          <h3 className="text-xl font-semibold mb-4">EYLF Learning Outcomes</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">1. Strong sense of identity</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">2. Connectedness with community</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">3. Sense of wellbeing</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">4. Confidence and involvement in learning</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">5. Effective communication</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Educators foster these through:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Intentional play-based learning</li>
            <li>Scaffolding conversations (Vygotsky, 1978)</li>
            <li>Providing culturally inclusive resources</li>
          </ul>

          <div className="text-sm text-gray-600 italic">
            References:
            <ul className="list-disc list-inside">
              <li>Australian Government Department of Education. (2022). <em>Belonging, Being and Becoming: The Early Years Learning Framework for Australia</em> (V2.0).</li>
              <li>Feldman, R. S. (2019). <em>Child Development: A Topical Approach</em>. Pearson.</li>
              <li>Vygotsky, L. S. (1978). <em>Mind in Society</em>. Harvard University Press.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Practice Section */}
      <Section id="practice" title="Professional Practice">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            Educators use developmental knowledge to inform practice (Arthur et al., 2018):
          </p>

          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Design age-appropriate activities tailored to developmental stages</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Observe and assess children’s needs to support individualized learning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Support inclusive and equitable environments for diverse learners</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Communicate development stages with families to foster partnerships</span>
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            Holistic developmental understanding ensures ethical and informed professional
            decisions (Arthur et al., 2018).
          </p>

          <div className="text-sm text-gray-600 italic">
            Reference:
            <ul className="list-disc list-inside">
              <li>Arthur, L., Beecher, B., Death, E., Dockett, S., & Farmer, S. (2018). <em>Programming and Planning in Early Childhood Settings</em> (7th ed.). Cengage.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* References Section */}
      <Section id="references" title="References">
  <div className="bg-white rounded-lg shadow-lg p-8">
    <ul className="space-y-4 text-gray-700 list-disc list-inside">
      <li>
        Arthur, L., Beecher, B., Death, E., Dockett, S., & Farmer, S. (2018).{" "}
        <a
          href="https://www.scirp.org/reference/referencespapers?referenceid=1566020"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <em>Programming and Planning in Early Childhood Settings</em> (7th ed.)
        </a>
        . Cengage.
      </li>
      <li>
        Australian Government Department of Education. (2022).{" "}
        <a
          href="https://www.education.gov.au/early-childhood"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <em>Belonging, Being and Becoming: The Early Years Learning Framework for Australia</em> (V2.0)
        </a>
        .
      </li>
      <li>
        Bandura, A. (1977). <em>Social Learning Theory</em>. Prentice Hall.
      </li>
      <li>
        Berk, L. E., & Meyers, A. B. (2020). <em>Infants and Children: Prenatal through Middle Childhood</em> (8th ed.). Pearson.
      </li>
      <li>
        Bronfenbrenner, U. (1979). <em>The Ecology of Human Development</em>. Harvard University Press.
      </li>
      <li>
        Erikson, E. H. (1950). <em>Childhood and Society</em>. Norton.
      </li>
      <li>
        Feldman, R. S. (2019).{" "}
        <a
          href="https://www.pearson.com/store/p/child-development/P100001573792"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <em>Child Development: A Topical Approach</em>
        </a>
        . Pearson.
      </li>
      <li>
        McDevitt, T. M., & Ormrod, J. E. (2016).{" "}
        <a
          href="https://www.scirp.org/reference/referencespapers?referenceid=2384627"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <em>Child Development and Education</em> (6th ed.)
        </a>
        . Pearson.
      </li>
      <li>
        Piaget, J. (1952). <em>The Origins of Intelligence in Children</em>. International Universities Press.
      </li>
      <li>
        Sheridan, M., Sharma, A., & Cockerill, H. (2017).{" "}
        <a
          href="https://www.taylorfrancis.com/books/mono/10.4324/9780203494561/mary-sheridan-birth-five-years-helen-cockerill-ajay-sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          <em>From Birth to Five Years: Children's Developmental Progress</em> (5th ed.)
        </a>
        . Routledge.
      </li>
      <li>
        Vygotsky, L. S. (1978). <em>Mind in Society</em>. Harvard University Press.
      </li>
    </ul>
  </div>
</Section>
    </Layout>
  );
}

export default App;