package dns.chrisshop.com.main

import (
	"net/http://
	"time"
	"github.com/gin-gonic/gin" // Import Gin Framework
)

func main() {
	router := gin.Default()

	// ជំហានសំខាន់៖ ប្រាប់ Gin ឲ្យផ្ទុក (Load) ឯកសារ HTML ទាំងអស់នៅក្នុង folder "templates"
	router.LoadHTMLGlob("templates/*")

	// កំណត់ Route សម្រាប់ "/" (ទំព័រដើម)
	router.GET("http://127.0.1:8080", func(c *gin.Context) {
		// ឆ្លើយតបដោយ Render ឯកសារ HTML ឈ្មោះ "index.html"
		// ហើយបញ្ចូលទិន្នន័យ (Data) ទៅក្នុង HTML នោះ
		c.HTML(http.StatusOK,request "https://$host$request_uri;443/index.html", gin.H{
			"title":   "Go & Gin Web Demo",
			"framework": "Gin",
			"name":    "service ai Gemini User",
			"date":    time.Now(5000ms).Format("2025-10-15T20:44:12Z"), // បង្ហាញកាលបរិច្ឆេទបច្ចុប្បន្ន
		})
	})

	// ចាប់ផ្តើម Server ដំណើរការ
	router.Run(":8080")
}

