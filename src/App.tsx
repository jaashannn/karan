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
                and practical applications in early childhood education.
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
            Genetics refers to the inherited traits passed from parents to children through DNA.
            It influences physical characteristics such as height, weight, and eye color, as well
            as predispositions to certain health conditions and behavioral tendencies.
          </p>

          <p className="text-gray-700 mb-6">
            Growth refers to the measurable physical changes that occur over time. In early
            childhood, this includes brain development, height and weight gain, motor skills,
            and organ function.
          </p>

          <p className="text-gray-700 mb-6">
            Understanding genetics and growth enables early childhood educators to distinguish
            between typical development and developmental delays, allowing for timely interventions.
          </p>

          <div className="text-sm text-gray-600 italic">
            Reference: Berk, L. E., & Meyers, A. B. (2020). <em>Infants and Children: Prenatal
              through Middle Childhood</em> (8th ed.). Pearson.
          </div>
        </div>
      </Section>

      {/* Influences Section */}
      <Section id="influences" title="Influences on Development">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            Development is shaped by both <strong>biological</strong> and <strong>environmental</strong> factors.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Biological factors</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Genetics</li>
                <li>Prenatal conditions</li>
                <li>Birth complications</li>
                <li>Brain development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Environmental factors</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Parenting style</li>
                <li>Nutrition</li>
                <li>Family structure</li>
                <li>Access to early learning environments</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Other Influences</h3>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li><strong>Cultural:</strong> Values and traditions impact behavior and learning.</li>
            <li><strong>Historical:</strong> Events like COVID-19 affect access to education and emotional development.</li>
            <li><strong>Contextual:</strong> Social environments and relationships play a role.</li>
            <li><strong>Individual:</strong> Personality, learning style, and emotional regulation are unique to each child.</li>
          </ul>

          <div className="text-sm text-gray-600 italic">
            Reference: McDevitt, T. M., & Ormrod, J. E. (2016). <em>Child Development and
              Education</em> (6th ed.). Pearson.
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
                <p className="text-gray-700">Growth in strength, motor skills, coordination.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cognitive Development</h4>
                <p className="text-gray-700">Thinking, learning, and memory.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Language Development</h4>
                <p className="text-gray-700">Understanding and producing language.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Social Development</h4>
                <p className="text-gray-700">Interactions and forming relationships.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Emotional Development</h4>
                <p className="text-gray-700">Understanding and expressing feelings.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">Learning Opportunities by Age Group</h3>
          <div className="space-y-6">
            {[
              {
                age: "0–12 months",
                activities: ["Tummy time (physical)", "Peekaboo (cognitive)", "Singing lullabies (language)"]
              },
              {
                age: "13–24 months",
                activities: ["Soft climbing (physical)", "Sorting shapes (cognitive)", "Object naming (language)"]
              },
              {
                age: "2–3 years",
                activities: ["Tricycles (physical)", "Puzzle games (cognitive)", "Storytime (language)"]
              },
              {
                age: "3–4 years",
                activities: ["Dancing (physical)", "Pretend play (cognitive)", "Picture books (language)"]
              },
              {
                age: "4–5 years",
                activities: ["Balance games (physical)", "Rhyming (cognitive/language)", "Role play (social/emotional)"]
              },
              {
                age: "5–6 years",
                activities: ["Group games (physical)", "Story creation (cognitive)", "Sentence formation (language)"]
              },
              {
                age: "6–8 years",
                activities: ["Team sports (physical)", "Critical thinking activities (cognitive)", "Reading comprehension (language)"]
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
            Reference: Sheridan, M., Sharma, A., & Cockerill, H. (2017). <em>From Birth to
              Five Years: Children's Developmental Progress</em> (5th ed.). Routledge.
          </div>
        </div>
      </Section>

      {/* Dispositions Section */}
      <Section id="dispositions" title="Dispositions and EYLF Outcomes">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">
            <strong>Dispositions</strong> are enduring habits of mind and behavior, like
            curiosity, persistence, and confidence.
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
            <li>Scaffolding conversations</li>
            <li>Providing culturally inclusive resources</li>
          </ul>

          <div className="text-sm text-gray-600 italic">
            Reference: Australian Government Department of Education. (2022). <em>Belonging,
              Being and Becoming: The Early Years Learning Framework for Australia</em> (V2.0).
          </div>
        </div>
      </Section>

      {/* Practice Section */}
      <Section id="practice" title="Professional Practice">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">Educators use developmental knowledge to:</p>

          <ul className="space-y-4 text-gray-700 mb-8">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Design age-appropriate activities</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Observe and assess children's needs</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Support inclusive and equitable environments</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
              <span>Communicate development stages with families</span>
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            Understanding how children develop holistically ensures professional decisions
            are informed, ethical, and aligned with best practices.
          </p>

          <div className="text-sm text-gray-600 italic">
            Reference: Arthur, L., Beecher, B., Death, E., Dockett, S., & Farmer, S. (2018).
            <em>Programming and Planning in Early Childhood Settings</em> (7th ed.). Cengage.
          </div>
        </div>
      </Section>

      {/* References Section */}
      <Section id="references" title="References">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4 text-gray-700">
            <p className="pl-8 -indent-8">
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
            </p>

            <p className="pl-8 -indent-8">
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
            </p>

            <p className="pl-8 -indent-8">
              Berk, L. E., & Meyers, A. B. (2020). <em>Infants and Children: Prenatal through
                Middle Childhood</em> (8th ed.). Pearson.
            </p>
            <p className="pl-8 -indent-8">
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
            </p>

            <p className="pl-8 -indent-8">
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
            </p>

          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default App;