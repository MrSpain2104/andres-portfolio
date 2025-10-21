import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Andrés España - Científico de Datos",
  description:
    "Explora proyectos reales: Dashboard de Conversiones a GNCV (Dash), Dashboard de Energía Eólica en Colombia (Streamlit) y una app de gestión de posts y comentarios (Django).",
  openGraph: {
    title: "Proyectos | Andrés España - Científico de Datos",
    description:
      "Dashboard GNCV (Dash), Dashboard Energía Eólica (Streamlit), App de Posts/Comentarios (Django) y mini-proyectos en Jupyter (Credit Scoring, Carros, Aire Seúl, Bayesiano, PySpark RF).",
  },
}

export default function ProyectosPage() {
  const projects = [
    {
      id: 1,
      title: "Dashboard de Conversiones a GNCV en Colombia",
      description:
        "Dashboard interactivo (Dash) para analizar conversiones a GNCV en Colombia: KPIs, tendencia temporal con promedio móvil, top 10 municipios y mapa geográfico con filtros por año y departamento.",
      image: "/images/gvc.png",
      technologies: ["Python", "Plotly Dash", "Pandas"],
      github: "https://github.com/AndreSpain2104/Dashboard_Conversiones_GNCV_Colombia",
      demo: "https://entregabledash.onrender.com",
      featured: true,
    },
    {
      id: 2,
      title: "Dashboard de Energía Eólica en Colombia",
      description:
        "Dashboard interactivo (Streamlit) para explorar el potencial y desarrollo de la energía eólica en Colombia con métricas clave, gráficos dinámicos y mapa con filtros por departamento y categoría.",
      image: "/images/wind-dashboard.svg",
      technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Folium", "Docker"],
      github: "https://github.com/AndreSpain2104/EolicaDocker",
      demo: "https://eolicadocker.onrender.com",
      featured: true,
    },
    {
      id: 3,
      title: "Aplicación de Gestión de Posts y Comentarios",
      description:
        "Aplicación CRUD para posts y comentarios creada como parte de un laboratorio de Bases de Datos, enfocada en diseño y modelamiento relacional.",
      image: "/images/django-app.svg",
      technologies: ["Python", "Django", "SQLite"],
      github: "https://github.com/AndreSpain2104/TwitterClone_BBDD",
      demo: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Scoring Crediticio (GiveMeSomeCredit)",
      description:
        "Jupyter Book con EDA, balanceo (SMOTE/ADASYN), benchmarking (KNN, NB, LR, RF, XGBoost, SVM), tuning (Grid/Optuna), validación e interpretabilidad (LIME).",
      image: "/images/credit-scoring.svg",
      technologies: ["Python", "Jupyter","scikit-learn", "XGBoost", "SMOTE"],
      github: "https://mrspain2104.github.io/credit_scoring_machine_learning/notebooks/01_introduction.html",
      demo: "https://mrspain2104.github.io/credit_scoring_machine_learning/notebooks/01_introduction.html",
      featured: false,
    },
    {
      id: 5,
      title: "Clasificación y Regresión para Ventas de Carros",
      description:
        "Mini-proyecto en Jupyter: modelos de clasificación y regresión aplicados al dominio de ventas de automóviles.",
      image: "/images/cars-ml.svg",
      technologies: ["Python", "scikit-learn", "Jupyter"],
      github: "https://juantellas.github.io/ClasificacionPrediccionCarros_ML_MP3_JAAEOM/intro.html",
      demo: "https://juantellas.github.io/ClasificacionPrediccionCarros_ML_MP3_JAAEOM/intro.html",
      featured: false,
    },
    {
      id: 6,
      title: "Polución y Calidad del Aire en Seúl",
      description:
        "EDA y modelos predictivos sobre la calidad del aire en Seúl, evaluando indicadores contaminantes y tendencias.",
      image: "/images/air-quality-seoul.svg",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://juantellas.github.io/EDA_airQuality_Seoul_ver2/intro.html",
      demo: "https://juantellas.github.io/EDA_airQuality_Seoul_ver2/intro.html",
      featured: false,
    },
    {
      id: 7,
      title: "Clasificador Bayesiano (GaussianNB)",
      description:
        "Clasificación de enfermedad cardíaca con GaussianNB. Pipeline, evaluación y comparación con otros modelos.",
      image: "/images/bayes-classifier.svg",
      technologies: ["Python", "scikit-learn", "GaussianNB", "Jupyter"],
      github: "https://omedinaavilla.github.io/Test_Informe/intro.html",
      demo: "https://omedinaavilla.github.io/Test_Informe/intro.html",
      featured: false,
    },
    {
      id: 8,
      title: "PySpark vs scikit-learn  — Lending Club",
      description:
        "Clasificación de estado del préstamo (Default/Fully Paid) con scikit-learn y PySpark MLlib. Incluye interpretabilidad con LIME.",
      image: "/images/pyspark-rf.svg",
      technologies: ["Python", "PySpark", "scikit-learn", "LIME", "Jupyter"],
      github: "https://omedinaavilla.github.io/modeloPyspark/intro.html",
      demo: "https://omedinaavilla.github.io/modeloPyspark/intro.html",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Últimos Proyectos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Una colección de proyectos que demuestran mi pasión por convertir datos en soluciones innovadoras
            </p>
          </div>

          <div className="mb-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 fade-in-up overflow-hidden card-hover-lift"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - Proyecto de ciencia de datos`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Ver Proyecto
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mini Projects Section */}
          <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold mb-8 text-foreground">Miniproyectos de Machine Learning Jupyter Books</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 card-hover-lift"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - Proyecto de ciencia de datos`}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent focus-visible" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Código
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 focus-visible" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
